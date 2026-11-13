import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";

// Configuration constants
const MAX_PAYLOAD_SIZE = 10 * 1024; // 10 KB
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// In-memory sliding window fallback for environments without Upstash Redis
interface InMemoryRateRecord {
  timestamps: number[];
}
const inMemoryRateMap = new Map<string, InMemoryRateRecord>();

// Mask IP for privacy-preserving security logs
function maskIp(ip: string): string {
  if (ip.includes(":")) {
    const segments = ip.split(":");
    return segments.slice(0, 2).join(":") + ":****:****";
  }
  const octets = ip.split(".");
  if (octets.length === 4) {
    return `${octets[0]}.${octets[1]}.***.***`;
  }
  return "masked-ip";
}

// In-memory atomic sliding window check
function checkInMemoryRateLimit(ip: string, now: number): { allowed: boolean; waitMinutes: number } {
  // Prune expired entries
  inMemoryRateMap.forEach((record, key) => {
    record.timestamps = record.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (record.timestamps.length === 0) {
      inMemoryRateMap.delete(key);
    }
  });

  const record = inMemoryRateMap.get(ip) || { timestamps: [] };
  record.timestamps = record.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (record.timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = record.timestamps[0];
    const waitMinutes = Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 60000);
    return { allowed: false, waitMinutes: Math.max(1, waitMinutes) };
  }

  record.timestamps.push(now);
  inMemoryRateMap.set(ip, record);
  return { allowed: true, waitMinutes: 0 };
}

// Upstash Redis atomic sliding window check (Sorted Set)
async function checkRedisRateLimit(
  redis: Redis,
  ip: string,
  now: number
): Promise<{ allowed: boolean; waitMinutes: number }> {
  const key = `ratelimit:contact:${ip}`;
  const clearBefore = now - RATE_LIMIT_WINDOW_MS;

  const pipeline = redis.pipeline();
  pipeline.zremrangebyscore(key, 0, clearBefore);
  pipeline.zadd(key, { score: now, member: `${now}-${Math.random().toString(36).slice(2, 8)}` });
  pipeline.zcard(key);
  pipeline.expire(key, Math.ceil(RATE_LIMIT_WINDOW_MS / 1000));

  const results = await pipeline.exec();
  const count = (results[2] as number) || 0;

  if (count > MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, waitMinutes: Math.ceil(RATE_LIMIT_WINDOW_MS / 60000) };
  }

  return { allowed: true, waitMinutes: 0 };
}

// Sanitize text to prevent HTML injection and XSS in email clients
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Strip CRLF control characters to prevent SMTP header injection
function sanitizeHeader(input: string): string {
  return input.replace(/[\r\n\t]/g, " ").trim();
}

export async function POST(req: NextRequest) {
  try {
    // 1. Content-Type Validation
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { success: false, error: "Unsupported media type. Request must be application/json." },
        { status: 415 }
      );
    }

    // 2. Body Size Guard via Content-Length Header
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        { success: false, error: "Payload too large. Maximum message size is 10 KB." },
        { status: 413 }
      );
    }

    // 3. Client IP Resolution
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    let clientIp = (forwarded ? forwarded.split(",")[0].trim() : realIp) || "127.0.0.1";
    // Sanitize clientIp format
    clientIp = clientIp.replace(/[^a-fA-F0-9:.]/g, "").slice(0, 45) || "127.0.0.1";

    const now = Date.now();
    let rateCheck: { allowed: boolean; waitMinutes: number };

    // 4. Rate Limiting: Upstash Redis (Distributed) or In-Memory (Fallback)
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (redisUrl && redisToken) {
      try {
        const redis = new Redis({ url: redisUrl, token: redisToken });
        rateCheck = await checkRedisRateLimit(redis, clientIp, now);
      } catch (redisErr) {
        console.warn("[Contact API RateLimiter] Redis connection failed, falling back to in-memory:", redisErr);
        rateCheck = checkInMemoryRateLimit(clientIp, now);
      }
    } else {
      rateCheck = checkInMemoryRateLimit(clientIp, now);
    }

    if (!rateCheck.allowed) {
      console.warn(`[Contact API] Rate limit reached for masked origin ${maskIp(clientIp)}`);
      return NextResponse.json(
        {
          success: false,
          error: `Rate limit reached. Please wait ${rateCheck.waitMinutes} minute(s) before sending another inquiry, or email neeravjain91@gmail.com directly.`,
        },
        { status: 429 }
      );
    }

    // 5. Parse JSON Payload
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = body;

    // 6. Anti-Spam Honeypot Check
    if (honeypot && String(honeypot).trim().length > 0) {
      console.warn(`[Contact API] Anti-spam honeypot triggered from origin ${maskIp(clientIp)}`);
      return NextResponse.json(
        { success: false, error: "Automated submission rejected." },
        { status: 400 }
      );
    }

    // 7. Input Schema Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid name (2 to 100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !email ||
      typeof email !== "string" ||
      !emailRegex.test(email.trim()) ||
      email.trim().length > 120
    ) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address (maximum 120 characters)." },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.trim().length > 3000
    ) {
      return NextResponse.json(
        { success: false, error: "Message must be between 10 and 3,000 characters." },
        { status: 400 }
      );
    }

    // 8. Sanitization
    const sanitizedName = sanitizeHeader(name.trim());
    const sanitizedEmail = sanitizeHeader(email.trim().toLowerCase());
    const rawSubject =
      subject && typeof subject === "string" && subject.trim().length > 0
        ? subject.trim().slice(0, 150)
        : "Portfolio Engineering Inquiry";
    const sanitizedSubject = sanitizeHeader(rawSubject);
    const sanitizedMessage = message.trim();

    const escapedName = escapeHtml(sanitizedName);
    const escapedEmail = escapeHtml(sanitizedEmail);
    const escapedSubject = escapeHtml(sanitizedSubject);
    const escapedMessage = escapeHtml(sanitizedMessage).replace(/\n/g, "<br/>");

    // 9. Resend API Dispatch
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "neeravjain91@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      console.warn("[Contact API] RESEND_API_KEY is not configured in server environment.");
      return NextResponse.json(
        {
          success: false,
          error: "The email delivery service is currently not configured on this server (missing RESEND_API_KEY). Please email neeravjain91@gmail.com directly.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const dateFormatted = new Date().toUTCString();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: sanitizedEmail,
      subject: `[Portfolio Inquiry] ${sanitizedSubject} — from ${sanitizedName}`,
      text: `New Portfolio Inquiry:\n\nFrom: ${sanitizedName} <${sanitizedEmail}>\nSubject: ${sanitizedSubject}\nDate: ${dateFormatted}\nOrigin: ${maskIp(clientIp)}\n\nMessage:\n${sanitizedMessage}\n`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #334155;">
          <div style="border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #38bdf8; font-size: 20px; font-weight: 700;">New Portfolio Inquiry</h2>
            <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 13px;">Received via neerav-jain-portfolio.vercel.app</p>
          </div>
          
          <div style="background: #1e293b; padding: 16px; border-radius: 8px; margin-bottom: 20px; font-size: 13px; line-height: 1.6;">
            <p style="margin: 0 0 8px 0;"><strong style="color: #cbd5e1;">From:</strong> ${escapedName} &lt;<a href="mailto:${escapedEmail}" style="color: #38bdf8; text-decoration: none;">${escapedEmail}</a>&gt;</p>
            <p style="margin: 0 0 8px 0;"><strong style="color: #cbd5e1;">Subject:</strong> ${escapedSubject}</p>
            <p style="margin: 0 0 8px 0;"><strong style="color: #cbd5e1;">Timestamp:</strong> ${dateFormatted}</p>
            <p style="margin: 0;"><strong style="color: #cbd5e1;">Origin:</strong> <code style="color: #94a3b8;">${maskIp(clientIp)}</code></p>
          </div>
          
          <div style="margin-bottom: 24px;">
            <h4 style="margin: 0 0 10px 0; color: #e2e8f0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message Body:</h4>
            <div style="background: #020617; padding: 18px; border-radius: 8px; border-left: 4px solid #38bdf8; color: #f1f5f9; font-size: 14px; line-height: 1.6;">
              ${escapedMessage}
            </div>
          </div>
          
          <div style="border-top: 1px solid #334155; padding-top: 14px; text-align: center; color: #64748b; font-size: 12px;">
            Reply directly to this email to reach <strong>${escapedName}</strong> (${escapedEmail}).
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact API] Resend email delivery failed:", error.message);
      return NextResponse.json(
        {
          success: false,
          error: "Email delivery could not be completed at this time. Please contact neeravjain91@gmail.com directly.",
        },
        { status: 502 }
      );
    }

    // Return truthful acceptance status
    return NextResponse.json(
      {
        success: true,
        message: "Message submitted successfully. Your inquiry has been accepted by the email dispatch service.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Contact API] Unexpected server error:", err?.message || err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please contact neeravjain91@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
