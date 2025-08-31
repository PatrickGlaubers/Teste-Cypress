describe('Funcionalidade - Página de produtos', () => {

  beforeEach(() => {
    cy.visit('produtos')
  })

  it('Deve selecionar um produto da lista', () => {
    cy.get('.product-block')
      //.first()
      //.last()
      //.eq(3)
      .contains('Ariel Roll Sleeve Sweatshirt')
      .click()
  })

  it('Deve adicionar produtos ao carrinho', () => {
    var quantidade = 3

    cy.get('.product-block')
      .contains('Argus All-Weather Tank').click()
     cy.get('.button-variable-item-XS').click()
     cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
     cy.get('[name="quantity"]').clear().type(quantidade)
     cy.get('.single_add_to_cart_button').click()
     cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

     cy.get('.woocommerce-message').should('contain', quantidade + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho.')
  })

  it('Deve adicionar produtos ao carrinho usando comandos personalizados', () =>{
  var quantidade = 2
  var nomeProduto = 'Aero Daily Fitness Tee'
  var tamanho = 'XS'
  var cor = 'Yellow'
  cy.addProdutos(nomeProduto, quantidade, tamanho, cor)
  cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
  cy.get('.woocommerce-message')
  .should('contain', `${quantidade} × “${nomeProduto}” foram adicionados no seu carrinho.`)
  })

  it('Deve adicionar produtos ao carrinho usando comandos personalizados', () =>{
  var quantidade = 2
  var nomeProduto = 'Aether Gym Pant'
  var tamanho = '32'
  var cor = 'Brown'
  cy.addProdutos(nomeProduto, quantidade, tamanho, cor)
  cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
  cy.get('.woocommerce-message')
  .should('contain', `“${nomeProduto}” foram adicionados no seu carrinho.`)
  })


})
