/// <reference types="Cypress"/>
import reg from '../../support/pageObjects/reg'

describe ("My Second Test", function() {

    it ("MyTest", function() {
        const registration = new reg()
        cy.visit(Cypress.env('url'))
        cy.get('#signUpButton').click()
        registration.getEmail().type('lizamelihovaa#gmail.com')
        registration.createAccount().click().then(function(){
            cy.get('input.mdc-text-field__input').first().should('have.attr', 'type', 'email')
            registration.errorEmail().first().should('have.css', 'color', 'rgb(176, 0, 32)')
        })

        registration.clearEmail().clear()
        registration.getEmail().type('lizamelihovaa@@gmail.com')
        registration.createAccount().click().then(function(){
            cy.get('input.mdc-text-field__input').first().should('have.attr', 'type', 'email')
            registration.errorEmail().first().should('have.css', 'color', 'rgb(176, 0, 32)')
        })

        registration.clearEmail().clear()
        registration.getEmail().type('lizamelihovaa@gmail')
        registration.createAccount().click().then(function(){
            registration.bannerError().contains('Incorrect registration email').and('have.css', 'color', 'rgb(176, 0, 32)')
        }) 

        registration.clearEmail().clear()
        registration.getEmail().type('liza-97-49@mail.r')
        registration.createAccount().click({ multiple: true }).then(function(){
            registration.bannerError().contains('Incorrect registration email').and('have.css', 'color', 'rgb(176, 0, 32)')
        }) 

        registration.clearEmail().clear()
        registration.getEmail().type('lizamelih ovaa@gmail.com')
        registration.createAccount().click({ multiple: true }).then(function(){
            cy.get('input.mdc-text-field__input').first().should('have.attr', 'type', 'email')
        })

        registration.clearEmail().clear()
        registration.getEmail().type('lizamelihovaa@gmail.com')
        registration.createAccount().click({ multiple: true }).then(function(){
            registration.bannerError().contains('This user already exists').and('have.css', 'color', 'rgb(176, 0, 32)')
        })

        registration.clearEmail().clear()
        registration.getEmail().type('LIZAMELIHOVAA@GMAIL.COM')
        registration.createAccount().click({ multiple: true }).then(function(){
            registration.bannerError().contains('This user already exists').and('have.css', 'color', 'rgb(176, 0, 32)')
        })

        registration.clearEmail().clear()
        registration.getEmail().type('lizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaalizamelihovaa@gmail.com')
        registration.createAccount().click({ multiple: true }).then(function(){
            registration.bannerError().contains('Incorrect registration email').and('have.css', 'color', 'rgb(176, 0, 32)')
        })

        registration.closeButton().click()

        
        

    })
})