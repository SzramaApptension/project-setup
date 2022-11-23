describe('Visit homepage', () => {
  it('visit homepage', 
  () => {
    cy.visit(Cypress.env('url_qa'))
    cy.url().should('contain', "qa");
  })

  it('visit homepage', 
  () => {
    cy.visit(Cypress.env('url_stage'))
    cy.url().should('contain', "stage");
  })
})