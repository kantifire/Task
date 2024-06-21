describe('Itemnumber adv search', () => {
    it('Should not display any result with invalid item number', () => {
        // Visit the eBay advanced search page
        cy.visit("https://www.ebay.com/sch/ebayadvsearch");
         
        // Click on the appropriate menu item for item number search
        cy.get('.fake-menu__item').eq(2).click();
        
        // Enter an invalid item number in the search field
        cy.get('[data-testid="s0-1-17-9[0]-_nkw"]').type('2260646693682121');
        
        // Click the search button
        cy.get('button[data-marko*="s0-1-17-11"]').should('be.visible').click();
        
        // Verify that no exact matches message is displayed
        cy.get('h3').should('contain', 'No exact matches found');

        // Adding a wait for 5 seconds for demonstration (adjust as necessary)
        cy.wait(5000);
    });
   
    it.skip('Should display any result with valid item number', () => {
        // Visit the eBay advanced search page
        cy.visit("https://www.ebay.com/sch/ebayadvsearch");
         
        // Click on the appropriate menu item for item number search
        cy.get('.fake-menu__item').eq(2).click();
        
        // Enter a valid item number in the search field
        cy.get('[data-testid="s0-1-17-9[0]-_nkw"]').type('305606556428');
        
        // Click the search button
        cy.get('button[data-marko*="s0-1-17-11"]').should('be.visible').click();
        
        // Verify that no "no exact matches found" message is not present
        cy.get('h3').should('not.contain', 'No exact matches found');

        // Adding a wait for 10 seconds for demonstration (adjust as necessary)
        cy.wait(10000);
    });
});
