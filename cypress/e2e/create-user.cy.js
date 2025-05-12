describe('Homepage Navigation', () => {
  it('should create a new user', () => {
    // Visit the base URL
    cy.visit('http://localhost:3000')

    // Verify we are on the correct URL
    cy.url().should('eq', 'http://localhost:3000/')

    // Get the ID input field and type a number value
    cy.get('#user-id').type(5).should('have.attr', 'type', 'number')

    // Get the name input field and type a string value
    cy.get('#user-name').type('Gérard').should('have.attr', 'type', 'text')

    // click on the submit button
    cy.get('#add-user-form > button').click()
  })

  it('should delete a user', () => {
    // Visit the base URL
    cy.visit('http://localhost:3000')

    // click on the delete button
    cy.get(':nth-child(3) > .delete-btn').click()
  })
})