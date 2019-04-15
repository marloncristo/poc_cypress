
class Helpers{
    // constructor(){}
    
    selecionarModalRodoviario()
    {
        const btnRodoviario = cy.get("#mat-button-toggle-1")
         btnRodoviario.click();
    }
    selecionarModalFerroviario()
    {
        const btnFerroviario = cy.get('#mat-button-toggle-2')
        btnFerroviario.click();
    }
    selecionarNacionalidadeBrasileiro()
    {
        const btnBrasileiro = cy.get('#mat-radio-5')
        btnBrasileiro.click();
    }
    selecionarNacionalidadeEstrangeiro()
    {
        const btnEstrangeiro = cy.get('#mat-radio-6')
        btnEstrangeiro.click();
    }


    
    preencherDadosMotorista(dadosMotorista){
        const preencherNome = cy.get('#nome-completo')
        preencherNome.type(dadosMotorista.nome)

        const preencherRg = cy.get('#rg')
        preencherRg.type(dadosMotorista.rg)
        
        const preencherCpf = cy.get('#cpf')
        preencherCpf.type(dadosMotorista.cpf)
   }

   preencherDadosHabilitacao(dadosHabilitacao){
       const preencherNumero = cy.get('#documento-habilitacao').type(dadosHabilitacao.numero)
       const  verCategorias = cy.get('#categoria-cnh').click()
       const selecionarCategoria = cy.get('#mat-option-3').click()
       const preencherValidade = cy.get('#validade-cnh').type(dadosHabilitacao.validade)
   }

   uploadDocHabilitacao(){
    const fileName =  'anexo.png'
    cy.fixture(fileName).then(fileContent => {
      cy.get('input[type=file]').upload(
        { fileContent, fileName, mimeType: 'image/png' },
        { subjectType: 'input' },
      );
    })
   }

   preencherDadosEndereco(dadosEndereco){
       const preencherCep = cy.get("#endereco-cep").type(dadosEndereco.cep);
       const preencherLogradouro = cy.get('#endereco-logradouro').type(dadosEndereco.logradouro)
       const preencherComplemento = cy.get('#endereco-complemento').type(dadosEndereco.complemento)
       const preencherNumero = cy.get('#endereco-numero').type(dadosEndereco.numero)
       const verEstados = cy.get('#endereco-uf').click()
       const selecionarEstado = cy.get('#mat-option-22').click()
    //    const verCidades = cy.get('#endereco-cidade').click()
    //    const selecionarCidades = cy.get('#mat-option-325').click()
   }

   preencherDadosContato(dadosContato){
        const preencherFone = cy.get('#contato-telefone-residencial').type(4136032280)
        const preencherCelular = cy.get('#contato-telefone-celular').type(41999999999)
        const prrencherEmail = cy.get('#contato-email').type('email@email.com')
        const preencherObservacoes = cy.get('#text-area').type('teste automatizado com cypress')
   }

   fazerLogin(){
    cy.get('#username')
    .type('qs.mpaula')
    cy.get("#password")
    .type('tcp@2019')
    cy.get('#submit-login').click()
   }
   
}


module.exports = Helpers