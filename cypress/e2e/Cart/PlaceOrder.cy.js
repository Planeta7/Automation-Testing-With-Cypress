describe('Placing an order', () => {
  it('Should successfully place the order, and display an alert message', () => {
  
    cy.visit('https://www.demoblaze.com')

    cy.get('.nav-link').eq(3).click()
    cy.get('.btn-success').eq(0).click()

    cy.get('#name').click({force: true}).type('testname')
    cy.get('#country').click().type('countryname')
    cy.get('#city').click().type('cityname')
    cy.get('#card').click().type('cardnum')
    cy.get('#month').click().type('monthdate')
    cy.get('#year').click().type('yeardate')

    cy.get('.btn').eq(5).click({force: true})

    cy.get('.sweet-alert').should('be.visible'); 
  })
})
