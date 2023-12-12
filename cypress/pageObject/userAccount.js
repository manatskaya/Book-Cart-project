export class UserRegistrationForm{
    getLoggedInUserAccount() {
        return cy.get('div:nth-child(3) > button.mat-focus-indicator.mat-menu-trigger.mat-button.mat-button-base.ng-star-inserted > span.mat-button-wrapper');
    }
}