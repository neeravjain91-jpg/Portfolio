import { test, expect } from "@playwright/test";

test.describe("Portfolio End-to-End Suite", () => {
  test("1. Landing page loads successfully with core elements", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Neerav Jain/);

    // Hero section checks
    await expect(page.locator("h1")).toContainText("Engineering Reliable AI");
    await expect(page.getByText("Neerav Jain").first()).toBeVisible();

    // Verify Direct Download Resume button is present and links to PDF
    const downloadResumeBtn = page.locator('a[href="/Neerav_Jain_Resume.pdf"]');
    await expect(downloadResumeBtn.first()).toBeVisible();
    await expect(downloadResumeBtn.first()).toHaveAttribute("download", "Neerav_Jain_Resume.pdf");

    // Verify GitHub profile link
    const githubLink = page.locator('a[href="https://github.com/neeravjain91-jpg"]');
    await expect(githubLink.first()).toBeVisible();

    // Verify skills section
    const skillsHeading = page.getByRole("heading", { name: "Technical Tooling Matrix" });
    await expect(skillsHeading).toBeVisible();
    await expect(page.getByText("PyTorch").first()).toBeVisible();
    await expect(page.getByText("Scikit-learn").first()).toBeVisible();
  });

  test("2. Resume modal displays accurate academic details and direct download", async ({ page }) => {
    await page.goto("/");
    // Click button to open resume modal
    const resumeModalBtn = page.getByRole("button", { name: /View CV|Resume/i });
    if (await resumeModalBtn.count() > 0) {
      await resumeModalBtn.first().click();
      // Check modal content
      await expect(page.getByText("ABES Engineering College").first()).toBeVisible();
      await expect(page.getByText("Government Polytechnic").first()).toBeVisible();
      // Modal should also have direct download button
      const modalDownloadBtn = page.locator('.fixed a[href="/Neerav_Jain_Resume.pdf"]');
      await expect(modalDownloadBtn.first()).toBeVisible();
    }
  });

  test("3. Project search and live filters function correctly", async ({ page }) => {
    await page.goto("/");

    // Search input test
    const searchInput = page.getByPlaceholder(/Search by model/i);
    await expect(searchInput).toBeVisible();
    await searchInput.fill("AeroPulse");
    await page.waitForTimeout(300);

    // Only AeroPulse-X should match inside projects section
    await expect(page.locator("#projects").getByText("AeroPulse-X").first()).toBeVisible();
    await expect(page.locator("#projects").getByText("Subsurface Ocean Temperature")).not.toBeVisible();

    // Clear search
    await searchInput.fill("");
    await page.waitForTimeout(300);

    // Test Live Demos Only toggle
    const liveCheckbox = page.locator('input[type="checkbox"]');
    if (await liveCheckbox.count() > 0) {
      await liveCheckbox.first().check();
      await page.waitForTimeout(300);
      await expect(page.locator("#projects").getByText("Live App").first()).toBeVisible();
      await liveCheckbox.first().uncheck();
      await page.waitForTimeout(300);
    }
  });

  test("4. All 8 Project Showcase Pages load with empirical metrics & verified URLs", async ({ page }) => {
    const projects = [
      {
        slug: "aeropulse-x",
        title: "AeroPulse-X",
        github: "https://github.com/neeravjain91-jpg/final-aeropulse",
      },
      {
        slug: "ocean-subsurface-ml",
        title: "Subsurface Ocean Temperature Reconstruction",
        github: "https://github.com/neeravjain91-jpg/-Satellite-Embedding",
      },
      {
        slug: "wildfire-intelligence",
        title: "Multimodal Wildfire Spatiotemporal Intelligence for India",
        github: "https://github.com/neeravjain91-jpg/major-forest-fire",
      },
      {
        slug: "signature-vmake",
        title: "SYNAPSE (SIGNATURE VMAKE)",
        github: "https://github.com/neeravjain91-jpg/signature-v",
      },
      {
        slug: "bank-statement-extractor",
        title: "Bank Statement Table Extraction & Banking Analytics",
        github: "https://github.com/neeravjain91-jpg/bank",
      },
      {
        slug: "amazon-ml-entity-resolution",
        title: "DeepResolve ER",
        github: "https://github.com/neeravjain91-jpg/ml-amazon",
      },
      {
        slug: "road-guardian-ai",
        title: "Road Guardian AI",
        github: "https://github.com/neeravjain91-jpg/Road-Guardian-AI-",
      },
      {
        slug: "hackmate",
        title: "HackMate",
        github: "https://github.com/neeravjain91-jpg/hackmate",
      },
    ];

    for (const proj of projects) {
      const response = await page.goto(`/projects/${proj.slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.getByText(proj.title).first()).toBeVisible();

      // Check GitHub link on the page
      const repoLink = page.locator(`a[href="${proj.github}"]`);
      await expect(repoLink.first()).toBeVisible();
    }
  });

  test("5. Audit & Deployments auxiliary routes return 200", async ({ page }) => {
    const auditRes = await page.goto("/audit");
    expect(auditRes?.status()).toBe(200);
    await expect(page.getByText("GitHub Repository Audit & Resolution")).toBeVisible();

    const depRes = await page.goto("/deployments");
    expect(depRes?.status()).toBe(200);
    await expect(page.getByText("Live Deployments Command Center")).toBeVisible();
  });

  test("6. Resume PDF static endpoint returns valid binary PDF", async ({ request }) => {
    const response = await request.get("/Neerav_Jain_Resume.pdf");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
    const buffer = await response.body();
    // Verify valid PDF header
    expect(buffer.subarray(0, 4).toString()).toBe("%PDF");
    // Verify file size is substantial (single page ATS PDF is ~7.3KB)
    expect(buffer.length).toBeGreaterThan(5000);
  });

  test("7. Server-side Contact API validation, honeypot and rate limiting", async ({ request }) => {
    // A. Validation failure: missing fields
    const resEmpty = await request.post("/api/contact", {
      data: { name: "", email: "", message: "" },
    });
    expect(resEmpty.status()).toBe(400);
    const bodyEmpty = await resEmpty.json();
    expect(bodyEmpty.success).toBe(false);

    // B. Validation failure: invalid email
    const resBadEmail = await request.post("/api/contact", {
      data: { name: "Test User", email: "not-an-email", message: "Hello Neerav, this is a test message." },
    });
    expect(resBadEmail.status()).toBe(400);

    // C. Validation failure: message too short
    const resShortMsg = await request.post("/api/contact", {
      data: { name: "Test User", email: "test@domain.com", message: "Hi" },
    });
    expect(resShortMsg.status()).toBe(400);

    // D. Honeypot anti-spam rejection
    const resHoneypot = await request.post("/api/contact", {
      data: {
        name: "Bot User",
        email: "bot@spammer.org",
        message: "Automated spam message payload for testing.",
        honeypot: "spam_bot_input",
      },
    });
    expect(resHoneypot.status()).toBe(400);
    const bodyHoneypot = await resHoneypot.json();
    expect(bodyHoneypot.error).toContain("Automated submission rejected");

    // E. Unconfigured RESEND_API_KEY handling (returns 503 instead of false success)
    const resValidNoKey = await request.post("/api/contact", {
      data: {
        name: "Valid Recruiter",
        email: "recruiter@hiringfirm.com",
        subject: "Senior ML Opportunity",
        message: "We reviewed your AeroPulse and Ocean Subsurface work and would love to discuss an engineering role.",
      },
    });
    // In local test environment without RESEND_API_KEY, must return 503
    expect(resValidNoKey.status()).toBe(503);
    const bodyValid = await resValidNoKey.json();
    expect(bodyValid.success).toBe(false);
    expect(bodyValid.error).toContain("RESEND_API_KEY");
  });

  test("8. Contact form UI submission with mocked Resend delivery", async ({ page }) => {
    await page.goto("/");

    // Intercept /api/contact to simulate successful Resend response
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          message: "Your message has been delivered to Neerav's inbox.",
          id: "msg_mock_test_12345",
        }),
      });
    });

    // Fill form
    await page.locator('input[placeholder="e.g. Alex Wright"]').fill("Dr. Sarah Miller");
    await page.locator('input[placeholder="alex@domain.org"]').fill("s.miller@researchlab.edu");
    await page.locator('input[placeholder*="UAV Digital Twin"]').fill("PINN Research Collaboration");
    await page.locator('textarea[placeholder*="Describe your technical inquiry"]').fill("We are interested in evaluating your Rotax 914 ODE architecture for unmanned aerial vehicle digital twins.");

    // Submit
    await page.getByRole("button", { name: /Send Message/i }).click();

    // Verify success banner appears
    await expect(page.getByText("Message Dispatched Successfully!")).toBeVisible();
    await expect(page.getByText("s.miller@researchlab.edu")).not.toBeVisible(); // Form reset
  });

  test("9. Contact form UI error handling with real provider failure / 503 fallback", async ({ page }) => {
    await page.goto("/");

    // Intercept /api/contact with 502 upstream failure
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 502,
        contentType: "application/json",
        body: JSON.stringify({
          success: false,
          error: "Email delivery failed: Domain unverified. Please email neeravjain91@gmail.com directly.",
        }),
      });
    });

    // Fill form
    await page.locator('input[placeholder="e.g. Alex Wright"]').fill("Test Engineer");
    await page.locator('input[placeholder="alex@domain.org"]').fill("test@company.io");
    await page.locator('textarea[placeholder*="Describe your technical inquiry"]').fill("Testing provider fallback behavior when upstream email delivery fails.");

    // Submit
    await page.getByRole("button", { name: /Send Message/i }).click();

    // Verify error banner is shown with clickable mailto fallback
    await expect(page.getByText("Domain unverified")).toBeVisible();
    const mailtoLink = page.locator('a[href^="mailto:neeravjain91@gmail.com"]');
    await expect(mailtoLink.first()).toBeVisible();
  });

  test("10. Mobile responsiveness & hamburger navigation", async ({ page }) => {
    // Set viewport to standard mobile width
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Check no horizontal scroll overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // allowing minor subpixel tolerance

    // Mobile menu toggle button should be visible on mobile
    const mobileMenuBtn = page.locator('button[aria-label="Toggle Menu"], button:has(svg.lucide-menu)');
    if (await mobileMenuBtn.count() > 0) {
      await mobileMenuBtn.first().click();
      await page.waitForTimeout(200);
      await expect(page.getByRole("link", { name: /Projects/i }).first()).toBeVisible();
    }
  });

  test("11. Keyboard accessibility and focus traversal", async ({ page }) => {
    await page.goto("/");
    // Press Tab multiple times to verify focus transitions without traps
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press("Tab");
    }
    const focusedTag = await page.evaluate(() => document.activeElement?.tagName);
    expect(["A", "BUTTON", "INPUT", "BODY"]).toContain(focusedTag);
  });
});
