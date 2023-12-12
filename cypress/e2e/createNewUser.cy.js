import { token, registerNewUser, loginWithRegisteredUser, verifyLoggedInUserIsCorrect } from "../models/API-create-helpers"

describe('Register new user', () => {
    it('Register new user', () => {
      registerNewUser();
    });
    it('Login registered user', () => {
      loginWithRegisteredUser();
      cy.visit(Cypress.env('baseURL').ui, {
        onbeforeunload(content) {
          content.window.localStorage.setItem('authToken', token);
        }
      });
    })
    it('Verify that user logged in', () => {
      verifyLoggedInUserIsCorrect(Cypress.env('requestBody').username);
    })
    })
