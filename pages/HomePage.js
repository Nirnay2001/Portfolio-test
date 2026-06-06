import { expect } from '@playwright/test';
export class HomePage {
    constructor(page) {
        this.page = page;
        this.logo = page.locator('.nav-logo');
        this.navlinks = page.locator('#navLinks'); 

        this.describtion = page.locator('.hero-sub');
        this.skillsGrid = page.locator('.skills-grid');
        this.timeline = page.locator('.tl-date');
        this.awsGrid = page.locator('.aws-grid');
        this.toolsGrid = page.locator('.tool-item');
        this.contactEmail = page.locator('.contact-email');
    }
    async logoIsVisible() {
        await expect.soft(this.logo).toBeVisible();
    }
    async navlinksIsVisible() {
        await expect.soft(this.navlinks).toBeVisible();
    }
    async describtionIsVisible() {
        await expect.soft(this.describtion).toBeVisible();
    }
    async skillsGridIsVisible() {
        await expect.soft(this.skillsGrid).toBeVisible();
    }
    async timelineIsVisible() {
        await expect.soft(this.timeline).toBeVisible();
        const timelineCount = await this.timeline.textContent();
        await expect.soft(this.timeline).toHaveText('2022 – Now');
    }
    async awsGridIsVisible() {
        await expect.soft(this.awsGrid).toBeVisible();
    }
    async toolsGridIsVisible() {
        await expect.soft(this.toolsGrid).count().equal(16);
    }
    async contactEmailIsVisible() {
        await expect.soft(this.contactEmail).toBeVisible();
        const emailText = await this.contactEmail.textContent();
        console.log(emailText);
        await expect.soft(this.contactEmail).toHaveText('sealnirnay5@gmail.com');
    }
}