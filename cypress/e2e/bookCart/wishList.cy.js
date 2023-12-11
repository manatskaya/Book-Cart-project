import { token, loginWithRegisteredUser, verifyLoggedInUserIsCorrect } from "../../models/API-create-helpers"
import { getBookId, addProductToWishlist, getUserWishlist, deleteAddedProductToWishlist } from "../../models/wishList.models";

describe('Open Wish List', () => {
    it('Verify the list of available books for specified user', () => {
        loginWithRegisteredUser();
        cy.visit('/', {
            onBeforeLoad(content) {
                content.window.localStorage.setItem('authToken', token);
                }
            });
        verifyLoggedInUserIsCorrect('test17');
        getBookId();
    })
    it('Verify adding product to Wishlist', () => {
        addProductToWishlist();
    })
    it('Verify the list of available books', () => {
        getUserWishlist();
    })
    it('Verify deletion of products from Wishlist', () => {
        deleteAddedProductToWishlist();
    })
})
