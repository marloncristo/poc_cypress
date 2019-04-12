/// <reference types="Cypress" />

describe("Testes Api Veiculo", ()=>{


    it("Validando GET por ID", ()=>{
        cy.request({
            method:'GET',
            url: 'http://docker-qa:9051/api/Veiculo/5',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response =>{
            expect(response.status).to.eq(200)
            expect(response.body).have.property('placa')
            expect(response.body).have.property('modelo')
            expect(response.body.modelo).to.eq('Modelo Veiculo 005')
            expect(response.body.placa).to.eq('ABC005')

        })
    })

    it("Validando GET", ()=>{
        cy.request({
            method:'GET',
            url: 'http://docker-qa:9051/api/Veiculo',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response =>{
            expect(response.status).to.eq(200)
            expect(response.body.modelo).to.eq('Modelo Veiculo 001')
            expect(response.body.placa).to.eq('ABC001')
            expect(response.body).have.property('placa')
            expect(response.body).have.property('modelo')
        })
    })

    it("Validando gravação veiculo", ()=>{
        cy.request({
            method:'POST',
            url: 'http://docker-qa:9051/api/Veiculo',
            headers: {'Content-Type': 'application/json'},
            body:{"modelo": "feneme"}
            })   
            .then(response =>{
                expect(response.status).to.eq(200);
                expect(response.body.modelo).to.eq('jubiraca');

        })
    })
})