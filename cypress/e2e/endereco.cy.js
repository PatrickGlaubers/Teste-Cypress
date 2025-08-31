describe('Funcionalidade endereço - Faturamento e entrega', () => {

  beforeEach(()=>{
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
      cy.login(dados.usuario, dados.senha)
    })
    //cy.login('teste_aluno11@teste.com', 'teste@teste.com')
  })

  it('Deve fazer cadastro de faturamento com sucesso', () => {
      
    

  })
})