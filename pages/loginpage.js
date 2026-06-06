import { loginPage } from "../locators/login.locators.js";
import { getFirstLocator } from "../utils/selfHealing.js";

class LoginPage {
    constructor(page) {
        this.page = page;
        this.locators = loginPage(page);
    }

    async validateErrorMessage() {
        const errorMessageLocator = await getFirstLocator(this.locators.errorMessage);
        return await errorMessageLocator.textContent();
    }

    async clickNextButton() {
        const nextButtonLocator = await getFirstLocator(this.locators.nextButton);
        await nextButtonLocator.click();
    }

    async enterEmail(email) {
        const emailTextboxLocator = await getFirstLocator(this.locators.emailTextbox);
        await emailTextboxLocator.fill(email);
    }

    async enterPassword(password) {
        const passwordTextboxLocator = await getFirstLocator(this.locators.passwordTextbox);
        await passwordTextboxLocator.fill(password);
    }

    async clickLoginWithPassword() {
        const loginWithPasswordButtonLocator = await getFirstLocator(this.locators.loginwithpasswordButton);
        await loginWithPasswordButtonLocator.click();
    }

    async login(email = 'aerosimple@unosimple.com', password = 'Aero@123') {
        await this.clickNextButton();
        await this.validateErrorMessage();

        await this.enterEmail(email);
        await this.clickNextButton();

        await this.enterPassword(password);
        await this.page.waitForTimeout(500);
        await this.clickLoginWithPassword();
    }
}

export default LoginPage;