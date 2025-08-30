/// <reference types="cypress" />

describe('Funcionalidade login', () => {
  it('Senha inválida', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('[name="username"]').type('aluno_ebac@teste.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Login')
    
  })

  it('Email inválido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('[name="username"]').type('ebac@teste.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Login')
  })
})