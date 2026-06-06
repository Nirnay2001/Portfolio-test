import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('has title', async ({ page }) => {
  await page.goto('http://100.24.10.145/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/QA Engineer Portfolio/);
});

test('home page should have all the sections visible', async ({ page }) => {
    await page.goto('http://100.24.10.145/');
    const homePage = new HomePage(page);
    await homePage.logoIsVisible();
    await homePage.navlinksIsVisible();
    await homePage.describtionIsVisible();
    await homePage.skillsGridIsVisible();
    await homePage.timelineIsVisible();
    await homePage.awsGridIsVisible();
    await homePage.contactEmailIsVisible();
});  

