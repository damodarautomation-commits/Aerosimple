export const loginPage = (page) => ({
    errorMessage: [
        page.getByText('This field cannot be empty'),
        page.locator('span:has-text("This field cannot be empty")')
    ],

    nextButton: [
        page.getByRole('button', { name: 'Next' }),
        page.getByText('Next', { exact: true })
    ],

    emailTextbox: [
        page.getByRole('textbox', { name: 'Email' }),
        page.getByPlaceholder('Email', { exact: true })
    ],

    passwordTextbox: [
        page.getByRole('textbox', { name: 'Password' }),
        page.getByPlaceholder('Password', { exact: true }),
        page.locator('input[type="password"]')
    ],

    loginwithpasswordButton: [
        page.getByRole('button', { name: 'Login with Password12' }),
        page.getByText('Login with Password12', { exact: true })
    ]
});