// https://mochajs.org/  documentação

// describe ('Suite', ()=> {

//     it('Case Test', () => {

//     ??????


//     }) 


// }) 

// ////////////////////////////////////////////////////////////////

// describe ('Suite', ()=> {

//     describe('Case Test', () => {

//         it('Step 1', () => {

//             ??????
        
        
//             }) 


//     }) 


// }) 
////////////////////////////////////////////////////////////////////////

describe ('Home Page', ()=> {

    it('Deve exibir o titulo da pagina', () => {
        cy.visit("https://www.google.com/") 
        cy.title().should('contain', 'Google')
}) 


}) 


