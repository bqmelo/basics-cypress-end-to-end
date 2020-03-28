import {default_navigation_elements} from './default_elements';

describe('Home Page', () => {
    context('Default Elements', () => {
        before('Access site', () => {
            cy.visit('/');
        });

        it('Should have contain default elements', () => {
            default_navigation_elements();
        });

        it('Should have contain home page elements', () => {
            cy.get('#columns').children()
                .should(($) => {
                    expect($).have.lengthOf(2);
                    expect($).to.be.visible;
                    expect($[0]).to.have.attr('id', 'slider_row');
                    expect($[1]).to.have.attr('class', 'row');
                });
            cy.get('#homeslider').children()
                .should(($) => {
                    expect($).have.lengthOf(5);
                    expect($[0]).to.be.visible;
                    expect($[0]).to.have.attr('style');
                });
            cy.get('#htmlcontent_top > ul').children()
                .should(($) => {
                    expect($).have.lengthOf(2);
                    expect($).to.be.visible;
                });
            cy.get('#center_column').children()
                .should(($) => {
                    expect($).have.lengthOf(3);
                    expect($).to.be.visible;
                });
            cy.get('.homefeatured').should('have.attr', 'href', '#homefeatured');
            cy.get('.blockbestsellers').should('have.attr', 'href', '#blockbestsellers');
            cy.get('#homefeatured').children()
                .should(($) => {
                    expect($).to.be.visible;
                });
            cy.get('#blockbestsellers').children()
                .should(($) => {
                    expect($).to.be.hidden;
                });
        });
    });
});