/// <reference types="Cypress" />

function takeScreenshot(name){
    cy.exec('cd cypress/screenshots')
    cy.exec('pwd')
    cy.screenshot(name)
}
describe("login", function(){
    beforeEach(()=>{
        cy.visit("/login")
    })

    it("user obrigatório", ()=>{
        cy.get('#submit-login').click()
        const msg = "Login ou CPF obrigatório"
        cy.contains(msg)
        expect(msg).to.equal("Login ou CPF obrigatório erro")
        takeScreenshot('user obrigatorio')
    })

    it("senha obrigatória", function(){
        cy.get('#username')
        .type('qs.mpaula')
        // cy.get('#password')
        // .type('tcp@2010')
        .type('{enter}')
        cy.contains("Senha obrigatória")
        takeScreenshot('senha obrigatoria')
    })

    it("senha incorreta", function(){
        cy.get('#username')
        .type('qs.mpaula')
        //validando se o texto foi inserido no campo
        .should('have.value', 'qs.mpaula')
        cy.get('#password')
        .type('tcp@2010')
        .type('{enter}')
        cy.contains("O campo de login ou senha está inválido. Para realizar o login com o CPF, digite apenas números. Em caso de perda de senha, acesse a opção 'Esqueceu sua senha?' através do site do Portal do Cliente.")
        takeScreenshot('senha incorreta')
    })
    it("user incorreto", function(){
        cy.get('#username')
        .type('05239169036')
        cy.get('#password')
        .type('tcp@2019')
        .type('{enter}')
        cy.contains("O campo de login ou senha está inválido. Para realizar o login com o CPF, digite apenas números. Em caso de perda de senha, acesse a opção 'Esqueceu sua senha?' através do site do Portal do Cliente.")
        takeScreenshot('senha incorreta')
    })
})