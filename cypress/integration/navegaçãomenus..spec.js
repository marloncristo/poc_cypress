/// <reference types="Cypress" />

import Helpers from "../support/helpers"
const helpers = new Helpers();

describe("Navegar Menus", ()=>{
    beforeEach(()=>{
        cy.visit("/login");
        helpers.fazerLogin();
        

    })
    it("Menu Cadastro", ()=>{
        cy.contains("Gerenciar");
        cy.contains("Veículos").click();

        
    })
})