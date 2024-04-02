// https://www.saucedemo.com/
//user-name
//password
//login-button

describe(()=> {

    before('Login', ()=> {
        cy.visit("https://www.saucedemo.com/") 
    })

    it('Deve exibir o titulo da pagina', () => {
        
        cy.get('#login').should('be.visible')
        cy.get('#user-name').should('standard_user')
        cy.get('#password').should('secret_sauce')
        cy.get('.login-button').click()
}) 


}) 
