describe('Giving valid email and password as an inut', () => {
  it('Should successfully create an account and dispplay an alert message', () => {
    
    cy.visit('https://www.demoblaze.com/')

    function generateRandomEmail() {
      const prefix = 'testemail'; 
      const randomNumber = Math.floor(Math.random() * 1000); 
      const email = `${prefix}${randomNumber}@gmail.com`; 
      return email;
    }

    cy.get('#signin2').click()
    cy.get('#sign-username').click().type(generateRandomEmail());

    cy.get('#sign-password').click().type('password')

    cy.get('.btn-primary').eq(1).click()
   
    cy.on('window:alert', (alertText) => {
     expect(alertText).to.equal('Sign up successful.');
    })
  })
}) 