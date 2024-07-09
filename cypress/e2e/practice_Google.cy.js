/// <reference types="cypress"/>
describe('Practice01 - Validate Google Home Page', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/');

})
it('TASK-1: Validate the Google Home Page Title and URL', () => {
  cy.title().should("eq", "Google");
  cy.url().should("eq", "https://www.google.com/");

})
it('TASK-2: Validate the Google Logo Presence', () => {
  cy.get('.lnXdpd').should('be.visible');

})
it('TASK-3: Validate the Google Search Results', () => {
  cy.get('.gLFyf').click().type('Cypress {enter}');
  cy.get('.LC20lb').should('be.visible');
})

it('TASK-4: Validate the Google Search Autocomplete Suggestions', () => {
  cy.get(".gLFyf").click().type("artificial intelligence");
  cy.get("ul.G43f7e li").should("have.length.at.least", 1);
  
  //cy.get(".gLFyf").click().type("artificial intelligence {Enter}");
  cy.get("ul.G43f7e li").first().click();
  cy.url().should("contain", "q=artificial+intelligence");

})

});