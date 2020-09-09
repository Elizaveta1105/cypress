/// <reference types="Cypress"/>
import login from '../../support/pageObjects/login'

describe ("My Second Test", function() {
    before(function() {
            cy.fixture('example').then(function(data){
                this.data=data
        })
      })

    it ("MyTest", function() {
        const shortLogin = new login()
        cy.visit(Cypress.env('url'))
        shortLogin.logIn().click()
        shortLogin.getEmail().type(this.data.email)
        shortLogin.getPassword().type(this.data.password)
        shortLogin.submit().click()
        cy.url().should('include', 'dashboard')
        cy.get('.mdc-top-app-bar__section--align-start > .rmwc-icon').click()
        cy.get('li.mdc-list-item:nth-child(8)').click({force: true})
        shortLogin.logIn().click()
        shortLogin.getEmail().type(this.data.email)
        shortLogin.getPassword().type(' ')
        shortLogin.submit().click()
        shortLogin.pass().should('have.css', 'color', 'rgb(176, 0, 32)')
        shortLogin.getPassword().should('have.attr', 'type', 'password')
        shortLogin.getEmail().clear()
        shortLogin.getPassword().clear()

        shortLogin.getEmail().type(' ')
        shortLogin.getPassword().type(' ')
        shortLogin.submit().click()
        shortLogin.getEmail().should('have.attr', 'type', 'email')
        shortLogin.em().should('have.css', 'color', 'rgb(176, 0, 32)')
        shortLogin.getPassword().should('have.attr', 'type', 'password')
        shortLogin.getEmail().clear()
        shortLogin.getPassword().clear()

        shortLogin.getEmail().type('testshortcm@gmail.com')
        shortLogin.getPassword().type(this.data.password)
        shortLogin.submit().click()
        shortLogin.getEmail().should('have.attr', 'type', 'email')
        shortLogin.em().should('have.css', 'color', 'rgb(176, 0, 32)')
        shortLogin.helperError().contains('User with this email was not found')
        shortLogin.getEmail().clear()
        shortLogin.getPassword().clear()

        shortLogin.getEmail().type(this.data.email)
        shortLogin.getPassword().type('konkordiya06')
        shortLogin.submit().click()
        shortLogin.pass().should('have.css', 'color', 'rgb(176, 0, 32)')
        shortLogin.getPassword().should('have.attr', 'type', 'password')
        shortLogin.erPas().contains('Password incorrect, please try again')
        shortLogin.getEmail().clear()
        shortLogin.getPassword().clear()

        shortLogin.getEmail().type('lizamelihovaa@gmail')
        shortLogin.getPassword().type(this.data.password)
        shortLogin.submit().click()
        shortLogin.getEmail().should('have.attr', 'type', 'email')
        shortLogin.em().should('have.css', 'color', 'rgb(176, 0, 32)')
        shortLogin.helperError().contains('User with this email was not found')
        shortLogin.getEmail().clear()
        shortLogin.getPassword().clear()

        shortLogin.getEmail().type('user@éxample.com')
        shortLogin.getPassword().type(this.data.password)
        shortLogin.submit().click()
        shortLogin.getEmail().should('have.attr', 'type', 'email')
        shortLogin.em().should('have.css', 'color', 'rgb(176, 0, 32)')
        shortLogin.getEmail().clear()
        shortLogin.getPassword().clear()

        shortLogin.getEmail().type(this.data.email)
        shortLogin.getPassword().type(this.data.password)
        shortLogin.toggle().uncheck()
        shortLogin.toggle().check().should('be.checked')
        shortLogin.submit().click()
        
        cy.url().should('include', 'dashboard')
        cy.get('.mdc-top-app-bar__section--align-start > .rmwc-icon').click()
        cy.get('li.mdc-list-item:nth-child(8)').click()
        shortLogin.logIn().click()
        shortLogin.getEmail().contains(this.data.email)
        shortLogin.getPassword().contains(this.data.password)

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    })
})