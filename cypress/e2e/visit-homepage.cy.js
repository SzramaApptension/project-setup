describe('Visit homepage', () => {
  it('visit homepage', 
  () => {
    if(Cypress.env('actual_env')=="qa"){
      cy.visit(Cypress.env('url_qa'))
      cy.url().should('contain', Cypress.env("env_qa"));
    }
    else{
      cy.visit(Cypress.env('url_stage'))
      cy.url().should('contain', Cypress.env("env_stage"));
    }
  })
})