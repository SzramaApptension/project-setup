describe('Visit homepage', () => {
  it('visit homepage', 
  () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('contain', Cypress.env('environment'));
  })
})