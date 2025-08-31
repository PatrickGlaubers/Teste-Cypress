import EnderecoPage from '../support/page-objects/endereco.page'

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
})