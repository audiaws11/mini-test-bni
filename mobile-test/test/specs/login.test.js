const { expect } = require('chai');

describe('Login Functionality', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        await browser.pause(2000); // Pause to ensure the page has time to load

        // Log the current URL and title for debugging
        const currentUrl = await browser.getUrl();
        const title = await browser.getTitle();
        console.log(`Navigated to: ${currentUrl}`);
        console.log(`Page title: ${title}`);
    });

    it('should login with valid credentials', async () => {
        const usernameField = await $('#username');
        const passwordField = await $('#password');
        const submitButton = await $('button[type="submit"]');

        // Wait for elements to exist
        console.log('Waiting for username field...');
        await usernameField.waitForExist({ timeout: 10000 });

        console.log('Waiting for password field...');
        await passwordField.waitForExist({ timeout: 10000 });

        console.log('Waiting for submit button...');
        await submitButton.waitForExist({ timeout: 10000 });

        console.log('Elements found, setting values...');
        
        // Set values and perform login
        await usernameField.setValue('Audia');
        await passwordField.setValue('SuperSecretPassword!');
        await submitButton.click();

        // Wait for success message to be displayed
        const successMessage = await $('#flash');
        console.log('Waiting for success message...');
        await successMessage.waitForDisplayed({ timeout: 10000 });

        // Get the success message text and assert
        const messageText = await successMessage.getText();
        console.log(`Success message: ${messageText}`);
        expect(messageText).to.include('You logged into a secure area!');
    });

    it('should not login with invalid credentials', async () => {
        const usernameField = await $('#username');
        const passwordField = await $('#password');
        const submitButton = await $('button[type="submit"]');

        // Wait for elements to exist
        console.log('Waiting for username field...');
        await usernameField.waitForExist({ timeout: 10000 });

        console.log('Waiting for password field...');
        await passwordField.waitForExist({ timeout: 10000 });

        console.log('Waiting for submit button...');
        await submitButton.waitForExist({ timeout: 10000 });

        console.log('Elements found, setting values...');

        // Set values and perform login
        await usernameField.setValue('invalidUser');
        await passwordField.setValue('invalidPassword');
        await submitButton.click();

        // Wait for error message to be displayed
        const errorMessage = await $('#flash');
        console.log('Waiting for error message...');
        await errorMessage.waitForDisplayed({ timeout: 10000 });

        // Get the error message text and assert
        const messageText = await errorMessage.getText();
        console.log(`Error message: ${messageText}`);
        expect(messageText).to.include('Your username is invalid!');
    });
});
