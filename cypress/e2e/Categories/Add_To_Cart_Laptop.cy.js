describe('Adding laptop to cart', () => {
  it('Should successfully save the laptop to cart, it should display an alert message', () => {
  
    cy.visit('https://www.demoblaze.com')

    // cy.get('#login2').click()

    // cy.get('#loginusername').click().type('planeta')
    // cy.get('#loginpassword').click().type('password')
    
    // cy.get('.btn-primary').eq(2).click()

    cy.get('.list-group-item').eq(2).click({force: true})

    cy.get('.hrefch').eq(1).click()

    cy.get('.btn').eq(7).click()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product added')
    })
  })
})