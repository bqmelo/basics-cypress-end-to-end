Cypress.Commands.add('login', () => {
    cy.visit('/');
    cy.get('.login').click();
    cy.get('#email').type('test.automation@yopmail.com');
    cy.get('#passwd').type('12345678');
    cy.get('#SubmitLogin').click();
});

Cypress.Commands.add('logout', () => {
    cy.get('div.breadcrumb.clearfix > a:nth-child(3)').click();
    cy.get('.nav > div > div > nav > div:nth-child(2) > a').click();
    cy.url().should('contains', '?controller=authentication&back=my-account')
});