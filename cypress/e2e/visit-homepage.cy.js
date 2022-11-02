describe('Visit homepage', () => {
  it('visit homepage QA' {
    env: {
      url: 'https://app.qa.hoh-cloud.apptoku.com',
    },
  }, 
  () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('contain', "qa");
  })

  it('visit homepage QA' {
    env: {
      url: 'https://app.qa.hoh-cloud.apptoku.com',
    },
  }, 
  () => {
    cy.visit(Cypress.env('url'))
    cy.url().should('contain', "stage");
  })
})