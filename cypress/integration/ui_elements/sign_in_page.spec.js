import {default_navigation_elements} from './default_elements';

describe('Sign in Page', () => {
    context('Default Elements', () => {
        before('Access site', () => {
            cy.visit('?controller=authentication&back=my-account');
        });

        it('Should have contain default elements', () => {
            default_navigation_elements();
        });

        it('Should have contain authentication elements', () => {
            cy.get('.home').should('have.attr', 'href', 'http://automationpractice.com/');
            cy.get('.navigation_page').should('contain', '	Authentication');
            cy.get('.page-heading').should('contain', 'Authentication');
        });

        it('Should have contain create account elements', () => {
            cy.get('#create-account_form')
                .should(($) => {
                    expect($).to.have.attr('action', 'http://automationpractice.com/index.php?controller=authentication');
                    expect($).to.have.attr('method', 'post');
                });
            cy.get('.navigation_page').should('contain', '	Authentication');
            cy.get('.page-heading').should('contain', 'Authentication');
            cy.get('.page-subheading').should('contain', 'Create an account');
            cy.contains('Please enter your email address to create an account.').should('exist');
            cy.get('#create_account_error').should('have.attr', 'style', 'display:none');
            cy.get('.form-group').children()
                .should(($) => {
                    expect($[0]).to.contain('Email address');
                    expect($[1]).to.have.attr('type', 'text');
                });
        });
    });
});