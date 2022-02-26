/// <reference types="cypress" />

context('Open Test Page', () =>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Test Probar la pagica', () =>{
        cy.title().should('include', 'My Store')
    })

    it('Test escribir algo en la busqueda', ()=>{
        cy.get('#search_query_top')
        .type('direccion@test.com', { delay: 100}).should('have.value', 'direccion@test.com')
        .clear()
        .type('Dress', { delay: 100  }).should('have.value', 'Dress')
    })

    it('Test buscar algo', () =>{
        cy.get('#search_query_top')
        .type('Dress', { delay: 100 }).should('have.value', 'Dress')
        cy.get('#searchbox > button').click({delay: 100})
    })
})