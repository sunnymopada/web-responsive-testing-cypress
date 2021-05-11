// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('App', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('renders the app', function () {
    console.log(Cypress.env('device'))
    cy.viewport('iphone-x')
    cy.get('.App-link').should('contain', 'Learn React')
  })
})
