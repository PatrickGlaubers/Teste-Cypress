import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereço - Faturamento e entrega', () => {

  beforeEach(()=>{
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
      cy.login(dados.usuario, dados.senha)
    })
    //cy.login('teste_aluno11@teste.com', 'teste@teste.com')
  })

  it('Deve fazer cadastro de faturamento com sucesso', () => {

    EnderecoPage.editarEnderecoFaturamento('Teste', 'Qualitativo', 'TesteInternacional', 'Brasil', 'Av Paulista', 'Unidade01', 'São Paulo', 'São Paulo', '01310-000', '99999-9999', 'teste_aluno11@teste.com')
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  })

  it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivos de dados', () => {

    EnderecoPage.editarEnderecoFaturamento(
      dadosEndereco[1].nome, 
      dadosEndereco[1].sobrenome, 
      dadosEndereco[1].empresa, 
      dadosEndereco[1].pais, 
      dadosEndereco[1].endereco,
      dadosEndereco[1].complementar, 
      dadosEndereco[1].cidade, 
      dadosEndereco[1].estado,
      dadosEndereco[1].cep, 
      dadosEndereco[1].telefone, 
      dadosEndereco[1].email)
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  })
})