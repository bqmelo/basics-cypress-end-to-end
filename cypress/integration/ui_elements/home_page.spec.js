import {default_navigation_elements} from './default_elements';

describe('Home Page', () => {
    context('Default Elements', () => {
        before('Access site', () => {
            cy.visit('/');
        });

        it('Should have default elements', () => {
            default_navigation_elements();
        });

        it('Should have home page elements', () => {
            cy.get('#columns').children()
                .should(($) => {
                    expect($).have.lengthOf(2);
                    expect($[0]).to.be.visible;
                    expect($[0]).to.have.attr('id', 'slider_row');
                    expect($[1]).to.be.visible;
                    expect($[1]).to.have.attr('class', 'row');
                });
            cy.get('#homeslider').children({force: true})
                .should(($) => {
                    expect($).have.lengthOf(5);
                    expect($[0]).to.be.visible;
                    expect($[0]).to.have.attr('style');
                });
            
        });
    });
});