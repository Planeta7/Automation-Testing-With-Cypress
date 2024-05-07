describe('Sending a message to the company', () => {
  it('Should successfully send the message, it should display an alert message', () => {
  
    cy.visit('https://www.demoblaze.com')

    cy.get('.nav-item').eq(1).click()
    cy.get('#recipient-email').type('test@gmail.com')
    cy.get('#recipient-name').type('nametest')
    cy.get('#message-text').type('messagetest')

    cy.get('.btn').eq(1).click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Thanks for the message!!')
  })
 })
})