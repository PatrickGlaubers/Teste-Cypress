// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('[name="username"]').type(usuario)
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(senha, {log: false})
    cy.get('[name="login"]').click()
    cy.get('a > .hidden-xs').should('contain', 'Welcome teste_aluno11 !')
})

Cypress.Commands.add('preCadastro', (email, password, firstName, lastName) =>{
    cy.get('[name="email"]').type(email)
    cy.get('.register > :nth-child(2) > [name="password"]').type(password, {log: false})
    cy.get('[name="register"]').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('[name="account_first_name"]').type(firstName)
    cy.get('[name="account_last_name"]').type(lastName)
    cy.get('[name="save_account_details"]').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta')
})

Cypress.Commands.add('addProdutos', (produto, quantidade, tamanho, cor) => {
    cy.get('.product-block')
      .contains(produto).click()
     cy.get('.button-variable-item-' + tamanho).click()
     cy.get('.button-variable-item-' + cor).click()
     cy.get('[name="quantity"]').clear().type(quantidade)
     cy.get('.single_add_to_cart_button').click()
     
})