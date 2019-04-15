/// <reference types="Cypress" />

describe("Testes Api Veiculo", () => {
  it("Validando GET por ID", () => {
    cy.request({
      method: "GET",
      url: "http://docker-qa:9051/api/Veiculo/5",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      // validando status code
      expect(response.status).to.eq(200);
      // validando se uma propriedade retornou no response
      expect(response.body).have.property("placa");
      expect(response.body).have.property("modelo");
      //validando o tipo do parametro retornado
      expect(response.body.modelo).to.be.an("string");
      // validando valor da propriedade
      expect(response.body.modelo).to.eq("Modelo Veiculo 005");
      expect(response.body.placa).to.eq("ABC005");
      expect(response.body.tara).to.be.an("number");
      expect(response.body.aprovado).to.be.an("boolean");
    });
  });

  it("Validando GET", () => {
    cy.request({
      method: "GET",
      url: "http://docker-qa:9051/api/Veiculo",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      expect(response.status).to.eq(200);
      // validando retorno de uma lista de objetos
      expect(response.body).to.be.an("array");
      // validando tipo da propriedade dentro de um array
      expect(response.body[0].modelo).to.be.an("string");
      expect(response.body[0].modelo).to.eq("Modelo Veiculo 001");
      expect(response.body[1].placa).to.eq("ABC002");
    });
  });

  it("Validando gravação veiculo", () => {
    cy.request({
      method: "POST",
      url: "http://docker-qa:9051/api/Veiculo",
      headers: { "Content-Type": "application/json" },
      body: { modelo: "feneme" }
    }).then(response => {
      expect(response.status).to.eq(200);
      // validando se o valor informado no post foi gravado corretamente
      expect(response.body.modelo).to.eq("jubiraca");
    });
  });
});

describe("deve remover um veiculo", () => {
  it("quando deleto por id", done => {
    cy.request({
      method: "DELETE",
      url: "http://docker-qa:9051/api/Veiculo/8",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eql({});
    });
  });

  after(done => {
    cy.request({
      method: "GET",
      url: "http://docker-qa:9051/api/Veiculo/8",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
    //validando busca por registro excluído
      expect(response.status).to.eq(404);
    });
  });
});

describe("deve atualizar o veiculo", done => {
  it("quando o mesmo existe", () => {
    cy.request({
      method: "PUT",
      url: "http://docker-qa:9051/api/Veiculo/9",
      headers: { "Content-Type": "application/json" },
      body: {
        modelo: "ford"
      }
    }).then(response => {
      expect(response.status).to.eq(200);
    });
  });

  after(done => {
    cy.request({
      method: "GET",
      url: "http://docker-qa:9051/api/Veiculo/9",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      // expect(response.status).to.eq(200);
      expect(response.body.modelo).to.equal("ford");
    });
  });
});

// tipo de validações realizadas:
//     GET
//      - status code
//      - propriedade no retorno
//      - tipo da propriedade no retorno
//      - valor da propriedade no retorno
//      - validar propriedade no array

//      POST
//      - status code
//      - valor propriedade no retorno

//      UPDATE
//      - status code
//      - valor propriedade no retorno

//      DELETE
//      - Status code
//      - valor objeto removido 
//      - status code ao buscar registro excluído


// validações a implementar
//     - valor contrato no post

