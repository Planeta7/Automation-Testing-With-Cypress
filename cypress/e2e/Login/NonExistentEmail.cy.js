describe('Enering a non existent email as an input', () => {
  it('Should not log the user in, an error message should be displayed', () => {
    
    cy.visit('https://www.demoblaze.com/')

    cy.get('#login2').click()

    cy.get('#loginusername').click().type('dw3434')
    cy.get('#loginpassword').click().type('f')
    
    cy.get('.btn-primary').eq(2).click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('User does not exist.');
    })
  })
})