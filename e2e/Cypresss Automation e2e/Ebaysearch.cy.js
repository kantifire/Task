
describe('Advance search ebay', () => {
   it('Searching using mutiple filters', () => {
   const data='Mouse';
    cy.visit('https://www.ebay.com/sch/ebayadvsearch');   // Visit eBay advanced search page

    cy.get('[data-testid="_nkw"]').type(data).should('be.visible'); //Type 'data' into the search input field and verify it's visible

    cy.get('[data-testid="s0-1-17-4[0]-7[1]-_in_kw"]').select('Exact words, any order');// Select 'Exact words, any order' option from dropdown
    cy.get('[id="_ex_kw"]').type('Mickey');// Type 'Mickey' into the 'Exclude these words' input field

    cy.get('[data-testid="s0-1-17-4[0]-7[3]-_sacat"]').select('Computers/Tablets & Networking');   // Select 'Computers/Tablets & Networking' from the category dropdown
    
    cy.get('input[name="LH_TitleDesc"]').check().should('be.checked');   // Check the 'Title and description' checkbox and verify it's checked
   
    cy.get('[class="adv-fieldset__format"]').contains('Accepts offers').click();   //Click on 'Accepts offers' option in the format section
   
    cy.get('[data-testid="s0-1-17-6[3]-[0]-LH_BO"]').should('be.checked'); // Verify 'Accepts offers' checkbox is checked
   
    cy.get('[class="adv-fieldset__location"]').contains('label', 'US Only').click(); // Click on 'US Only' in the location section
    
    cy.get('.adv-form__actions > .btn').click(); // Click the 'Search' button
    
    cy.get('#gh-ac').should('have.value', data); // Verify the search input field has the value 'data'
   
    cy.should('not.contain', 'mickey'); // Verify the search results do not contain 'mickey'
    
    cy.get('[class="srp-river srp-layout-inner"]').should('be.visible'); // Verify that the search results container is visible

   

    
})});