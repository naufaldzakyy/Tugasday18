describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLocations')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123").click()
    cy.get('.oxd-button')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Naufal")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Malang")
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    //edit location failed


  })
})