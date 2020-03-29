describe('Wishlist Page', () => {
    beforeEach('Login', () => {
        cy.login();
        cy.contains('My wishlists').click();
    });

    context('Adding items from wishlist', () => {    
        it('Should add T-shirt successfully', () => {
            cy.get('#block-history').should('not.exist');
            cy.contains('Printed Chiffon Dress').click();
            cy.get('#wishlist_button').click();
            cy.contains('Added to your wishlist.').should('exist');
            cy.get('.fancybox-skin > a').click();
            cy.get('.account').click();
            cy.contains('My wishlists').click();
            cy.get('#block-history').should('exist');
            cy.get('#block-history > table > tbody').should('have.length', 1);
            cy.logout();
        });
    });

    context('Deleting items from wishlist', () => {
        it('Should delete T-shirt successfully', () => {
            cy.get('#block-history > table > tbody').should('have.length', 1);
            cy.get('.wishlist_delete > a').click();
            cy.get('#block-history').should('not.exist');
            cy.logout();
        });
    });
});