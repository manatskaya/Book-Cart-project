export class UserRegistrationForm{
    getLoggedInUserAccount() {
        return cy.visit(Cypress.env('baseURL').ui);
    }
}