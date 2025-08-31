/// <reference types="cypress" />

import perfil from '../fixtures/perfil.json'

describe('Funcionalidade login', () => {

beforeEach(()=>{
  cy.visit('minha-conta')
})


  it('Deve fazer login com sucesso', () =>{
    cy.get('[name="username"]').type('teste_aluno11@teste.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
    cy.get('[name="login"]').click()
    cy.get('a > .hidden-xs').should('contain', 'Welcome teste_aluno11 !')
  })

  it('Deve fazer login com sucesso - Usando arquivos de dados', () =>{
    cy.get('[name="username"]').type(perfil.usuario)
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(perfil.senha)
    cy.get('[name="login"]').click()
    cy.get('a > .hidden-xs').should('contain', 'Welcome teste_aluno11 !')
  })

  it.only('Deve fazer login com sucesso - Usando fixture', ()=>{
    cy.fixture('perfil').then(dados =>{
      cy.get('[name="username"]').type(dados.usuario)
      cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(dados.senha, {log: false})
      cy.get('[name="login"]').click()
      cy.get('a > .hidden-xs').should('contain', 'Welcome teste_aluno11 !')
    })
  })

  it('Senha inválida', () => {
    cy.get('[name="username"]').type('aluno_ebac@teste.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Login')
    
  })

  it('Email inválido', () => {
    cy.get('[name="username"]').type('ebac@teste.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain', 'Login')
  })
})