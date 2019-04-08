
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

   
}


module.exports = Helpers





// constructor() {
//     this.btnRodoviario = element(by.id('mat-button-toggle-1'));
//     this.btnFerroviario = element(by.id('mat-button-toggle-2'));
//     this.btnBrasileiro = element(by.id('mat-radio-5'));
//     this.btnEstrangeiro = element(by.id('mat-radio-6'));
//     this.textNome = element(by.id('nome-completo'));
//     this.textRg = element(by.id('rg'));
//     this.textCPF = element(by.id('cpf'));
//     this.textHabilitacao = element(by.id('documento-habilitacao'));
//     this.selectCategoriaCNH = element(by.id('categoria-cnh'));
//     this.selectCategoriaCNHItens = element(by.id('mat-option-3'));
//     this.dataValidadeCNH = element(by.id('validade-cnh'));
//     this.uploadDocHabilitacao = element(by.id('upload-button'));
//     this.upload = element(by.css('input[type=file]'));
//     this.textCEP = element(by.id('endereco-cep'));
//     this.textEnderecoNumero = element(by.id('endereco-numero'));
//     this.textTelefoneFixo = element(by.id('contato-telefone-residencial'));
//     this.textTelefoneCelular = element(by.id('contato-telefone-celular'));
//     this.textEmail = element(by.id('contato-email'));
//     this.textObservacoes = element(by.id('text-area'));
//     this.btnCadastrar = element(by.id('submit-form'));
//     this.messageErrorCPF = element(by.id('mat-error-3'));
//     this.messageErrorData = element(by.id('mat-error-0'));

//     this.enderecoPais = element(by.id('endereco-pais'));
//     this.enderecoCidade = element(by.id('endereco-cidade'));
//     this.enderecoLogradouro = element(by.id('endereco-logradouro'));
//     this.enderecoComplemento = element(by.id('endereco-complemento'));
//     this.enderecoPaisItens = element(by.id('mat-option-37'));
// }