/// <reference types="Cypress" />

import Helpers from "../support/Helpers";

const helpers = new Helpers();

const dadosMotorista = {
  nome: "motora Brazuca",
  rg: "78491094",
  cpf: "05239160945"
};

const dadosHabilitacao = {
  numero: 7894545645,
  validade: 31122019
};

const dadosEndereco = {
  cep: 80050152,
  complemento: "complemento",
  logradouro: "logradouro",
  numero: 52
};

const dadosContato = {
  fone: "4136032280",
  celular: "41999999999",
  email: "email@email.com",
  observacoes: "teste automatizado com cypress"
};

describe("cadastro motorista", () => {
  it("cadastrar motorista rodoviario brasileito sem pageobjects", () => {
    cy.visit("/publico/cadastro/motorista");

    cy.get("#mat-button-toggle-1").click();

    cy.get("#mat-radio-5").click();

    cy.get("#nome-completo").type("motora brazuca");
    cy.get("#rg").type("78491094");
    cy.get("#cpf").type("05239160945");

    cy.get("#documento-habilitacao").type("7894545645");
    cy.get("#categoria-cnh").click();
    cy.get("#mat-option-3").click();
    cy.get("#validade-cnh").type("31122019");
    const fileName = "anexo.png";
    cy.fixture(fileName).then(fileContent => {
      cy.get("input[type=file]").upload(
        { fileContent, fileName, mimeType: "image/png" },
        { subjectType: "input" }
      );
    });

    cy.get("#endereco-cep")
      .type("80050152")
      .type("{enter}");
    cy.get("#endereco-logradouro").type("logradouro");
    cy.get("#endereco-numero").type(55);
    cy.get("#endereco-complemento").type("complemento");
    cy.get("#endereco-uf").click;
    cy.get("#mat-option-22").click();
    cy.get("#endereco-cidade").click();
    cy.get("#mat-option-325").click();

    cy.get("#contato-telefone-residencial").type(4136032280);
    cy.get("#contato-telefone-celular").type(41999999999);
    cy.get("#contato-email").type("email@email.com");
    cy.get("#text-area").type("teste automatizado com cypress");
  });

  it("cadastrar motorista rodoviario brasileito com pageobjects", () => {
    cy.visit("/publico/cadastro/motorista");

    helpers.selecionarModalRodoviario();

    helpers.selecionarNacionalidadeBrasileiro();

    helpers.preencherDadosMotorista(dadosMotorista);

    helpers.preencherDadosHabilitacao(dadosHabilitacao);
    helpers.uploadDocHabilitacao();

    helpers.preencherDadosEndereco(dadosEndereco);

    helpers.preencherDadosContato(dadosContato);
  });
});
