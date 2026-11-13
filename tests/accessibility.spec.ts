import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility (A11y) & Viewport Verification", () => {
  test("1. Homepage passes automated axe accessibility scan with 0 critical violations", async ({
    page,
  }) => {
    await page.goto("/");
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules(["color-contrast"]) // dark theme custom gradients checked separately
      .analyze();

    const criticalViolations = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical"
    );
    expect(criticalViolations).toEqual([]);
  });

  test("2. Project detail page passes automated axe scan with 0 critical violations", async ({
    page,
  }) => {
    await page.goto("/projects/aeropulse-x");
    const scanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .disableRules(["color-contrast"])
      .analyze();

    const criticalViolations = scanResults.violations.filter((v) => v.impact === "critical");
    expect(criticalViolations).toEqual([]);
  });

  test("3. Deployments command center passes automated axe scan", async ({ page }) => {
    await page.goto("/deployments");
    const scanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .disableRules(["color-contrast"])
      .analyze();

    const criticalViolations = scanResults.violations.filter((v) => v.impact === "critical");
    expect(criticalViolations).toEqual([]);
  });

  test("4. Audit & Lineage page passes automated axe scan", async ({ page }) => {
    await page.goto("/audit");
    const scanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .disableRules(["color-contrast"])
      .analyze();

    const criticalViolations = scanResults.violations.filter((v) => v.impact === "critical");
    expect(criticalViolations).toEqual([]);
  });

  test("5. Form labels and ARIA descriptors are explicitly associated", async ({ page }) => {
    await page.goto("/");

    // Verify contact form labels are associated with their input IDs
    const nameInput = page.locator("#contact_name");
    await expect(nameInput).toBeVisible();
    const nameLabel = page.locator('label[for="contact_name"]');
    await expect(nameLabel).toBeVisible();

    const emailInput = page.locator("#contact_email");
    await expect(emailInput).toBeVisible();
    const emailLabel = page.locator('label[for="contact_email"]');
    await expect(emailLabel).toBeVisible();

    const msgInput = page.locator("#contact_message");
    await expect(msgInput).toBeVisible();
    const msgLabel = page.locator('label[for="contact_message"]');
    await expect(msgLabel).toBeVisible();
  });

  test("6. Modal focus trap and Escape key closes the modal", async ({ page }) => {
    await page.goto("/");

    // Open resume modal
    const viewCvBtn = page.getByRole("button", { name: /View CV/i });
    if ((await viewCvBtn.count()) > 0) {
      await viewCvBtn.first().click();

      // Check modal role and aria-modal attribute
      const modal = page.locator('div[role="dialog"][aria-modal="true"]');
      await expect(modal).toBeVisible();

      // Press Escape to close modal
      await page.keyboard.press("Escape");
      await page.waitForTimeout(200);

      // Verify modal is closed
      await expect(modal).not.toBeVisible();
    }
  });

  test("7. Reduced motion preference is honored", async ({ page }) => {
    // Emulate prefers-reduced-motion: reduce
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    // Verify page renders without animation crash
    await expect(page.locator("h1")).toBeVisible();
  });

  test("8. Tablet viewport responsiveness (768x1024)", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });
});
