export function default_navigation_elements() {
    cy.get('.shop-phone').should('exist');
    cy.contains('Call us now: 0123-456-789').should('exist');
    cy.contains('Contact us').should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=contact');
    cy.get('.login').should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=my-account');
    cy.get('#header_logo > a')
        .should('exist')
        .and('have.attr', 'href', 'http://automationpractice.com/');
    cy.get('#header_logo > a > img').should('have.attr', 'src', 'http://automationpractice.com/img/logo.jpg');
    cy.get('#searchbox')
        .should(($form) => {
            expect($form).to.be.visible;
            expect($form).to.have.attr('action', 'http://automationpractice.com/index.php?controller=search');
        });
    cy.get('#searchbox').children()
        .should(($) => {
            expect($).have.lengthOf(5);
            expect($[0]).to.be.hidden;
            expect($[1]).to.be.hidden;
            expect($[2]).to.be.hidden;
            expect($[3]).to.be.visible;
            expect($[4]).to.be.visible;
            expect($[4]).to.be.visible;
            expect($[4]).to.have.attr('type', 'submit');
        });
    cy.get('.shopping_cart > a').should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=order');
  }  