describe('Adding phone to cart', () => {
  it('should successfully save the phone to cart, it should display an alert message', () => {
  
    cy.visit('https://www.demoblaze.com')

    cy.get('#login2').click()

    cy.get('#loginusername').click().type('planeta')
    cy.get('#loginpassword').click().type('password')
    
    cy.get('.btn-primary').eq(2).click()

    cy.get('.hrefch').eq(0).click({force: true})
    cy.get('.btn-success').eq(0).click()

    cy.on('window:alert', (alertText) => {
     expect(alertText).to.equal('Product added')
   })
  })
})
