describe('Leaving blank textfields when creating an account', () => {
  it('The account should not be created, an error message should be displayed', () => {

    cy.visit('https://www.demoblaze.com/')

    cy.get('#signin2').click()
    cy.get('#sign-username').click().clear()
    cy.get('#sign-password').click().type('password')

    cy.get('.btn-primary').eq(1).click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please fill out Username and Password.');
   })
  })
})