describe('Itemnumber adv search', () => {
    it('Should not display any result with invalid item number', () => {

         cy.visit("https://www.ebay.com/sch/ebayadvsearch");
         
         cy.get('.fake-menu__item').eq(2).click();
         cy.get('[data-testid="s0-1-17-9[0]-_nkw"]').type('2260646693682121');
         cy.get('button[data-marko*="s0-1-17-11"]').should('be.visible')
        .click();
        cy.get('h3').should('contain', 'No exact matches found');

        cy.wait(5000);

         

    
    
    
    
    });
   
    it.skip('Should  display any result with valid item number', () => {


        cy.visit("https://www.ebay.com/sch/ebayadvsearch");
         
        cy.get('.fake-menu__item').eq(2).click();
        cy.get('[data-testid="s0-1-17-9[0]-_nkw"]').type('305606556428');
        cy.get('button[data-marko*="s0-1-17-11"]').should('be.visible')
       .click();
       cy.get('h3').should('not.contain', 'No exact matches found');
       cy.wait(10000);


    });


});