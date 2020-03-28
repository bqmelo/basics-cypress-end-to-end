describe('Sign in Page', () => {
    context('Default Elements', () => {
        before('Access site', () => {
            cy.visit('?controller=authentication&back=my-account');
        });

        it('Should have second div with logo, search and cart', () => {
            
        });
    });
});