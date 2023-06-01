describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123").click()
    cy.get('.oxd-button')
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Naufal")
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("Dzaky")

  })
})