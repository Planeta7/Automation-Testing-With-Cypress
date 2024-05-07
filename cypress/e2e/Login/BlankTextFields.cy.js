describe('Leaving blank textfields when logging in', () => {
  it('The user should not be logged in, an error message should be displayed', () => {

    cy.visit('https://www.demoblaze.com/')

    cy.get('#login2').click()

    cy.get('#loginusername').click().clear('')
    cy.get('#loginpassword').click().clear('')
    
    cy.get('.btn-primary').eq(2).click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please fill out Username and Password.');
    })
  })
})