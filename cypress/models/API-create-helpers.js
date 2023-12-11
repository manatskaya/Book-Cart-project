import { UserRegistrationForm } from "../pageObject/userAccount";
const userRegistrationForm = new UserRegistrationForm();
export let token;
export let userId;
export let userTypeId;

function registerNewUser() {
    cy.request({
        url: "https://bookcart.azurewebsites.net/api/User",
        method: "POST",
        body: {
                "firstName": "Test1",
                "lastName": "Test2",
                "username": "test17",
                "password": "123456",
                "gender": "Female"
              }
        }).then((response) => {
            cy.log(response);
            
        });
}
function loginWithRegisteredUser() {
    cy.request({
        url: "https://bookcart.azurewebsites.net/api/Login",
        method: "POST",
        body: {
            "username": "test17",
            "password": "123456",
        }
    }).then((response) => {
        token = response.body.token;
        cy.log('token', token);
        userId = response.body.userDetails.userId;
        cy.log('userId', userId);
        userTypeId = response.body.userDetails.userTypeId;
        cy.log(userTypeId);
    })
}
function verifyLoggedInUserIsCorrect(accountTitle) {
    userRegistrationForm.getLoggedInUserAccount()
    .contains(accountTitle);
}
export { registerNewUser, loginWithRegisteredUser, verifyLoggedInUserIsCorrect };