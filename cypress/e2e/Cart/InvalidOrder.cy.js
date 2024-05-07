describe('Placing an order without filling all the text fields', () => {
  it('Should not place the order, and it should display an error message', () => {
  
    cy.visit('https://www.demoblaze.com')

    cy.get('.nav-link').eq(3).click()
    cy.get('.btn-success').eq(0).click()

    cy.get('#name').click({force: true}).type('testname')
    cy.get('#country').click().type('countryname')
    cy.get('#city').click().type('cityname')
    cy.get('#card').click().clear()
    cy.get('#month').click().type('monthdate')
    cy.get('#year').click().clear()
    cy.get('.btn').eq(5).click({force: true})

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please fill out Name and Creditcard.')
   })
  })
})