import{Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"



Given('You are on the login page', () => {
    cy.visit('https://www.saucedemo.com')
  
});
When('I enter my user name {string}', (username) => {
    cy.get("#user-name").type(username)
})
And('I enter my password {string}', (password) => {
    cy.get("#password").type(password)
})
And('I click on the login button', () => {
    cy.get(
        "#login-button"
        ).click();
})
Then('I should see the dashboard', () => {
    cy.get(".app_logo").should("have.text","Swag Labs")
})
Then('I should see an error message {string}', (errorMessage) => {
    cy.get("h3[data-test='error']").should("have.text",errorMessage)
})