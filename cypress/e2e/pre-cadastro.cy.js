/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const email = faker.internet.email({ firstName, lastName })
const password = faker.internet.password()

describe('Funcionalidade Pré-Cadastro', () => {

  beforeEach(() =>{
    cy.visit('minha-conta')
  })

  it('Deve completar o pré cadastro com sucesso', () => {

    cy.get('[name="email"]').type(email)
    cy.get('.register > :nth-child(2) > [name="password"]').type(password, {log: false})
    cy.get('[name="register"]').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('[name="account_first_name"]').type(firstName)
    cy.get('[name="account_last_name"]').type(lastName)
    cy.get('[name="save_account_details"]').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta')
  })

})