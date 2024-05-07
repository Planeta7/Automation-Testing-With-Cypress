describe('Giving valid email and password as an inut', () => {
  it('Should successfully log in to the registered account, it should display an alert message', () => {
    
    cy.visit('https://www.demoblaze.com')


    cy.get('#login2').click()

    cy.get('#loginusername').click().type('planeta')
    cy.get('#loginpassword').click().type('password')

    
    cy.get('.btn-primary').eq(2).click()
    cy.get('#nameofuser').should('contain', 'Welcome planeta'); // Assuming there's a user profile section visible after login

   })
  })
