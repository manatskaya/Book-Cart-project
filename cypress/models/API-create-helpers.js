import { UserRegistrationForm } from "../pageObject/userAccount";
const userRegistrationForm = new UserRegistrationForm();
export let token;
function registerNewUser() {
    cy.request({
        url: Cypress.env('baseURL').apiRegistration,
        method: "POST",
        body: {
                "firstName": "Test1",
                "lastName": "Test2",
                "username": Cypress.env('requestBody').username,
                "password": Cypress.env('requestBody').password,
                "gender": "Female"
              }
        }).then((response) => {
            cy.log(response.status);
        });
}
function loginWithRegisteredUser() {
    cy.request({
        url: Cypress.env('baseURL').apiLogin,
        method: "POST",
        body: {
            "username": Cypress.env('requestBody').username,
            "password": Cypress.env('requestBody').password
        }
    }).then((response) => {
        token = response.body.token;
    })
}
function verifyLoggedInUserIsCorrect(accountTitle) {
    userRegistrationForm.getLoggedInUserAccount()
    .should('contain', accountTitle);
}
export { registerNewUser, loginWithRegisteredUser, verifyLoggedInUserIsCorrect };