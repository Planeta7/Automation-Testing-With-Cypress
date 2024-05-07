describe('Entering an already used email as an input', () => {
  it('It should not save the user, it should display an error message', () => {
    cy.visit('https://www.demoblaze.com/')

    cy.get('#signin2').click()
    cy.get('#sign-username').click().type('test@gmail.com');

    cy.get('#sign-password').click().type('password')

    cy.get('.btn-primary').eq(1).click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('This user already exist.');
   })
 })
})