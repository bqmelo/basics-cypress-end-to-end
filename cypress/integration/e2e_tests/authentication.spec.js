describe('Authentication page', () => {
    context('Login successfully', () => {
        beforeEach('Access site', () => {
            cy.visit('/');
            cy.get('.login').click();
            cy.get('#email').type('test.automation@yopmail.com');
            cy.get('#passwd').type('12345678');
            cy.get('#SubmitLogin').click();
        });
    
        it('Should login successfully and displays all elements home page account', () => {
            cy.url().should('contain', '?controller=my-account');
            cy.get('.logout')
                .should('exist')
                .and('have.attr', 'href', 'http://automationpractice.com/index.php?mylogout=');
            cy.get('.account')
                .should('exist')
                .and('have.attr', 'href', 'http://automationpractice.com/index.php?controller=my-account');
            cy.contains('Welcome to your account. Here you can manage all of your personal information and orders.')
                .should('exist');
            cy.get('.myaccount-link-list > li').children()
                .should(($) => {
                    expect($[0]).to.have.attr('href', 'http://automationpractice.com/index.php?controller=history');
                    expect($[1]).to.have.attr('href', 'http://automationpractice.com/index.php?controller=order-slip');
                    expect($[2]).to.have.attr('href', 'http://automationpractice.com/index.php?controller=addresses');
                    expect($[3]).to.have.attr('href', 'http://automationpractice.com/index.php?controller=identity');
                });
            cy.get('.lnk_wishlist > a').should('have.attr', 'href', 'http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist');
            cy.get('.center_column > ul > li > a').should('have.attr', 'href', 'http://automationpractice.com/');
        });

        it('Should all links should load', () => {
            cy.contains('Order history and details').click();
            cy.get('#center_column > h1').should('contain', 'Order history');
            cy.get('.info-title').should('contain', "Here are the orders you've placed since your account was created.");
            cy.contains('Back to your account.').click();
            
            cy.contains('My credit slips').click();
            cy.get('#center_column > h1').should('contain', 'Credit slips');
            cy.get('.info-title').should('contain', "Credit slips you have received after canceled orders.");
            cy.contains('Back to your account').click();
            
            cy.contains('My addresses').click();
            cy.get('#center_column > h1').should('contain', 'My addresses');
            cy.get('.last_item').children().should('have.length', 9);
            cy.contains('Add a new address').should('exist');
            cy.contains('Back to your account').click();
            
            cy.contains('My personal information').click();
            cy.get('.box > h1').should('contain', 'Your personal information');
            cy.get('.info-title').should('contain', "Please be sure to update your personal information if it has changed.");
            cy.contains('Back to your account').click();
            
            cy.contains('My wishlists').click();
            cy.get('#mywishlist > h1').should('contain', 'My wishlists');
            cy.get('.page-subheading').should('contain', 'New wishlist');
            cy.contains('Back to Your Account').click();
        });
    });

    context('Trigger errors', () => {
        before('Access login page', () => {
            cy.visit('/');
            cy.get('.login').click();
        })

        it('Should trigger error when invalid email', () => {
            cy.get('#email').type('emailinvalid');
            cy.get('#SubmitLogin').click();
            cy.get('.alert > p').should('contain', 'There is 1 error');
            cy.get('.alert > ol > li').should('contain', 'Invalid email address.');
        }) 
    })
});