import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory sliding-window rate limiter by client IP
// Max 5 contact submissions per 10 minutes (600,000 ms) per IP
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

// Periodically clean up stale rate limit entries
function cleanupRateLimitMap() {
  const now = Date.now();
  rateLimitMap.forEach((record, ip) => {
    if (now > record.resetAt) {
      rateLimitMap.delete(ip);
    }
  });
}

// Sanitize text to prevent HTML injection and XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Strip CRLF to prevent email header injection
function sanitizeHeader(input: string): string {
  return input.replace(/[\r\n\t]/g, " ").trim();
}

export async function POST(req: NextRequest) {
  try {
    // 1. Client IP Resolution & Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = (forwarded ? forwarded.split(",")[0].trim() : realIp) || "127.0.0.1";

    cleanupRateLimitMap();

    const now = Date.now();
    const existingRate = rateLimitMap.get(clientIp);

    if (existingRate) {
      if (now > existingRate.resetAt) {
        rateLimitMap.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
      } else if (existingRate.count >= MAX_REQUESTS_PER_WINDOW) {
        const waitMinutes = Math.ceil((existingRate.resetAt - now) / 60000);
        return NextResponse.json(
          {
            success: false,
            error: `Rate limit exceeded. Please wait ${waitMinutes} minute(s) before sending another message, or email neeravjain91@gmail.com directly.`,
          },
          { status: 429 }
        );
      } else {
        existingRate.count += 1;
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    }

    // 2. Parse and Validate Request Payload
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

    // 3. Honeypot Anti-Spam Check
    // If the hidden honeypot field is populated, silently reject bot submission
    if (honeypot && String(honeypot).trim().length > 0) {
      console.warn(`[Anti-Spam] Honeypot triggered from IP: ${clientIp}`);
      return NextResponse.json(
        { success: false, error: "Automated submission rejected." },
        { status: 400 }
      );
    }

    // 4. Input Validations
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid name (2 to 100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim()) || email.trim().length > 120) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10 || message.trim().length > 3000) {
      return NextResponse.json(
        { success: false, error: "Message must be between 10 and 3,000 characters." },
        { status: 400 }
      );
    }

    // 5. Sanitization
    const sanitizedName = sanitizeHeader(name.trim());
    const sanitizedEmail = sanitizeHeader(email.trim().toLowerCase());
    const sanitizedSubject = sanitizeHeader(subject && typeof subject === "string" ? subject.trim() : "General Engineering Inquiry") || "General Engineering Inquiry";
    const sanitizedMessage = message.trim();

    const escapedName = escapeHtml(sanitizedName);
    const escapedEmail = escapeHtml(sanitizedEmail);
    const escapedSubject = escapeHtml(sanitizedSubject);
    const escapedMessage = escapeHtml(sanitizedMessage).replace(/\n/g, "<br/>");

    // 6. Resend Email Delivery
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "neeravjain91@gmail.com";
    // NOTE ON SENDER DOMAIN:
    // If CONTACT_FROM_EMAIL is not set, Resend allows sending from 'Portfolio Contact <onboarding@resend.dev>'
    // for testing domains, which delivers to the email account registered with Resend.
    // For production custom domains, verify your domain in Resend DNS and set CONTACT_FROM_EMAIL.
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      console.warn("[Contact API] RESEND_API_KEY is not configured in environment variables.");
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
      text: `New Portfolio Inquiry:\n\nFrom: ${sanitizedName} <${sanitizedEmail}>\nSubject: ${sanitizedSubject}\nDate: ${dateFormatted}\nIP: ${clientIp}\n\nMessage:\n${sanitizedMessage}\n`,
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
            <p style="margin: 0;"><strong style="color: #cbd5e1;">Origin IP:</strong> <code style="color: #94a3b8;">${clientIp}</code></p>
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
      console.error("[Contact API] Resend email delivery failed:", error);
      return NextResponse.json(
        {
          success: false,
          error: `Email delivery failed: ${error.message || "Unknown provider error"}. Please email neeravjain91@gmail.com directly.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been delivered to Neerav's inbox.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Contact API] Unexpected server error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please contact neeravjain91@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
