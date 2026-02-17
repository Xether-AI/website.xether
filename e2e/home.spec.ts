import { test, expect } from '@playwright/test';

test('has title and hero section', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Xether AI/);

    // Check for the main value proposition
    const heroText = page.locator('h1');
    await expect(heroText).toBeVisible();
});

test('navigation to features page', async ({ page }) => {
    await page.goto('/');

    // Click the Features link in navigation
    // Note: We use aria-label since we added it in Phase 6
    const featuresLink = page.getByLabel('Go to Features');
    await featuresLink.click();

    // Expect the URL to contain #features-section
    await expect(page).toHaveURL(/.*#features-section/);
});
