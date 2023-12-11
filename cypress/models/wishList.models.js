import { token, userId } from "./API-create-helpers";
export let bookObject;
export let booksArray;
export let bookId;
export let addedBookId;
function getBookId() {
    cy.request({
        url: "/api/Book"
    }).then((response) => {
        booksArray = response.body;
        expect(booksArray).not.empty;
        bookObject = booksArray.find((book) => 
            book.bookId == "21"
        );
        bookId = bookObject.bookId;
        cy.log('bookObject data', bookObject, typeof bookObject);
        cy.log('bookId', bookId, typeof bookId);
        expect(bookObject.author).includes(" Kiersten White");
    });
    
}

function addProductToWishlist() {
    cy.api({
        url: `/api/Wishlist/ToggleWishlist/${userId}/${bookId}`,
        method: "POST",
        auth: {
        "bearer": token
        },
        headers:{
            "content-type": "text/plain"
        },
        body: {
                "userId": userId,
                "bookId": bookId
              },
        }).then((response) => {
           cy.log('added product to WL', response.body[0], typeof response.body[0]);
           cy.log(response.body[0].author);
           expect(response.body[0].author).includes(" Kiersten White");
        })
}

function getUserWishlist() {
    cy.request({
        url: `/api/Wishlist/${userId}`
    }).then((response) => {
    cy.log(response);
    expect(response).not.empty;
    })
}

function deleteAddedProductToWishlist() {
    cy.api({
        url: `/api/Wishlist/${userId}`,
        method: "DELETE",
        auth: {
            "bearer": token
            },
        headers:{
                "content-type": "text/plain"
            },
    }).then((response) => {
        expect(response.status).equal(200);
    })
}

export { getBookId, getUserWishlist, addProductToWishlist, deleteAddedProductToWishlist };