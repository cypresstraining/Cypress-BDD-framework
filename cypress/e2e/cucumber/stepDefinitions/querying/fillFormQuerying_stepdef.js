import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

beforeEach(function(){
    cy.fixture('nopcommerceLoginData').as('data')
})

Given('User is on the example.cypress.io Home page', function () {
    cy.visit('https://example.cypress.io');
   
})

When('User click on commands dropdown and select the querying option', function () {
cy.get('.dropdown-toggle').click()
cy.get('.dropdown-menu > :nth-child(1) > a').click()
cy.url().should('eq','https://example.cypress.io/commands/querying')

})

When('User fill the form details', function () {
    cy.get('.query-form').within(() => {
        cy.get('input:first').clear().type(this.data.email)
        cy.get('input:last').clear().type(this.data.password)
      })

})

Then('User should be able to see the entered details on form', function () {
    cy.get('.query-form').within(() => {
        cy.get('input:first').should('have.attr', 'placeholder', 'Email')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password')
        cy.get('input:first').should('have.value', this.data.email)
        cy.get('input:last').should('have.value', this.data.password)

      })
})