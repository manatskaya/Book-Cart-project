import { token, registerNewUser, loginWithRegisteredUser, verifyLoggedInUserIsCorrect } from "../../models/API-create-helpers"

describe('Register new user', () => {
    it('Register new user', () => {
      registerNewUser();
    });
    it('Login registered user', () => {
      loginWithRegisteredUser();
      cy.visit('/', {
        onBeforeLoad(content) {
          content.window.localStorage.setItem('authToken', token);
        }
      });
      verifyLoggedInUserIsCorrect('test17');
    })
    })
