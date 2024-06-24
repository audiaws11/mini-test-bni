describe('Login Functionality', () => {
    it('should login with valid credentials', async () => {
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();
        
        const successMessage = await $('#flash').getText();
        expect(successMessage).to.include('You logged into a secure area!');
    });

    it('should not login with invalid credentials', async () => {
        await $('#username').setValue('invalidUser');
        await $('#password').setValue('invalidPassword');
        await $('button[type="submit"]').click();
        
        const errorMessage = await $('#flash').getText();
        expect(errorMessage).to.include('Your username is invalid!');
    });
});
