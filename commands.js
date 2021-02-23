// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


    Cypress.Commands.add("confirmIntegrations", (value) => { 
        cy.get('[type="submit"]').click()
    cy.get('.mdc-snackbar__label').should('contain','successfully')
    cy.get('[name="integrationGA"]').should('have.value', value)
    })
    

Cypress.Commands.add("clearFields", (x) => { 
    cy.get('[name="integrationGA"]').clear().clear()
    cy.get('[name="segmentKey"]').clear().clear()
    cy.get('[name="integrationFB"]').clear().clear()
    cy.get('[name="integrationGTM"]').clear().clear()
    cy.get('[name="integrationAdroll"]').clear().clear()
    cy.get('[type="submit"]').click()
})

Cypress.Commands.add("planInfo", (plan, links, domains, redirects) => { 
    cy.get('.mdc-top-app-bar__section--align-start > .rmwc-icon').click()
    cy.get('[data-tour="tour-sidebar-profile"]').click()
    cy.get('[href="/user/plan"] > .mdc-tab__ripple').click()
    cy.get('.plan__PlanInfo-sc-1fxl4og-0')
    .should('contain', plan)
    .and('contain', links)
    .and('contain', domains)
    .and('contain', redirects)
})

Cypress.Commands.add("downgradeToPaidPlan", (plan) => { 
    cy.get('.mdc-top-app-bar__section--align-start > .rmwc-icon').click()
  cy.get('[data-tour="tour-sidebar-subscription"]').click()
  cy.wait(30000)
  cy.get(`[class*="HeaderCell"]:contains(${plan}) [data-kind="review-update-redirect"]`).click()
  cy.get('[type="submit"]').click()
  cy.get('[role="alertdialog"]').should('contain', 'successfully').and('contain', plan)
    }) 

Cypress.Commands.add("deleteTeam", (el) => { 
    cy.get('[data-kind="open-delete-team"]').click()
    cy.get('[data-kind="team-delete-button"]').click()
    cy.get('.mdc-snackbar__surface').should('contain', 'successfully')
    }) 

Cypress.Commands.add("createSubscription", (plan, link) => { 
    
    cy.get('.mdc-top-app-bar__section--align-start > .rmwc-icon').click()
    cy.get('[data-tour="tour-sidebar-subscription"').click()
    cy.get(`[class*="HeaderCell"]:contains("${plan}") [data-kind="review-update-redirect"]`).click()
    cy.url().should('include', link)
    cy.get('[title="Secure card payment input frame"]').then($iframe => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body)
      .find('input[name="cardnumber"]')
      .type('4242')
      .type('4242')
      .type('4242')
      .type('4242')

cy.wrap($body)
  .find('input:eq(2)')
  .type('0426')
cy.wrap($body)
  .find('input:eq(3)')
  .type('431')
  cy.wrap($body)
.find('input:eq(4)')
  .type('49000')
    })
    cy.wait(2000)
    cy.get('[type="submit"]').click()
    cy.wait(10000)
    cy.get('[role="alertdialog"]').should('contain', 'successfully').should('contain', plan)
    cy.get('.mdc-dialog__actions > .mdc-ripple-upgraded > .mdc-button__ripple').click()
    cy.wait(30000)
    cy.get(`[class*="HeaderCell"]:contains("${plan}")`).should('contain','Current')
   
})


Cypress.Commands.add("creditCardUpgrade", (plan) => { 
    
    cy.get('[role="alertdialog"]').should('contain', 'successful').should('contain', plan)
    cy.get('.mdc-dialog__actions > .mdc-ripple-upgraded > .mdc-button__ripple').click()
    cy.get(`[class*="HeaderCell"]:contains("${plan}")`).should('contain','Current')
    
})


Cypress.Commands.add("downgradeCreditCard", (free) => {
  cy.get(`[class*="HeaderCell"]:contains("Free") [data-kind="cancel-subscription"]`).click()
  cy.get('[role="alertdialog"]').should('contain','cancellation')
  cy.get('[name="reason"]').should('not.be.checked')
  cy.get('[type="submit"]').should('be.disabled')  
  cy.get('#otherlabel').click()
  cy.get('[type="submit"]').click()
  cy.wait(40000)
  cy.get('.headerCell__HeaderCell-sc-50pvq9-4')
  .eq(0)
  .should('contain','Current')
})

Cypress.Commands.add("downgrade", (free) => {
    cy.get('.mdc-top-app-bar__section--align-start > .rmwc-icon').click()
    cy.get('[data-tour="tour-sidebar-subscription"]').click()
    cy.get(`[class*="HeaderCell"]:contains("Free") [data-kind="cancel-subscription"]`).click()
  cy.get('[role="alertdialog"]').should('contain','cancellation')
  cy.get('[name="reason"]').should('not.be.checked')
  cy.get('[type="submit"]').should('be.disabled')  
  cy.get('#otherlabel').click()
  cy.get('[type="submit"]').click()
  cy.wait(40000)
  cy.get('.headerCell__HeaderCell-sc-50pvq9-4')
  .eq(0)
  .should('contain','Current')
})

Cypress.Commands.add("login", (el) => { 
    cy.get('input.mdc-text-field__input[name="email"]').type('lizamelihovaa@gmail.com')
    cy.get('input.mdc-text-field__input[name="password"]').type('fIWknbf847')
    cy.get('div.mdc-button__ripple').click()
    cy.url().should('include', 'dashboard')
    }) 

    Cypress.Commands.add("createNewAcc", (el) => { 
    const email = Math.random().toString(36).substring(7)
    cy.visit('https://app.dev.short.io/public/register')
    cy.get('[aria-labelledby="email-label"]').type(email + "@dev.short.io")
    cy.get('div.mdc-button__ripple').click()
        }) 

        Cypress.Commands.add("createAcc", (el) => { 
            const email = Math.random().toString(36).substring(7)
            cy.visit('https://app.dev.short.io/public/register')
            cy.get('[aria-labelledby="email-label"]').type(email + "@dev.short.io")
            cy.get('div.mdc-button__ripple').click()
            cy.get(':nth-child(5) > .sc-gKAblj > .mdc-button__ripple').click()
                }) 

    

    Cypress.Commands.add("loginNew", (email, password) => { 
        cy.get('input.mdc-text-field__input[name="email"]').type(email)
        cy.get('input.mdc-text-field__input[name="password"]').type(password)
        cy.get('div.mdc-button__ripple').click()
        cy.url().should('include', 'dashboard')
        }) 

Cypress.Commands.add("logout", (el) => { 
    cy.get('.mdc-top-app-bar__section--align-start > .rmwc-icon').click()
    cy.get('.mdc-list-item:nth-child(8)').click()
    })

Cypress.Commands.add("enterDomain", (domainName) => { 
    cy.get('input[name="hostname"]').type(domainName)
    cy.get('.mdc-text-field-helper-line').contains('Invalid')
    cy.get('#empty-domain').should('be.disabled')
    cy.get('input[name="hostname"]').clear()
    }) 

Cypress.Commands.add("addDomain", (el) => {
    cy.get('.mdc-top-app-bar__section--align-start > .rmwc-icon').click()
    cy.wait(2000)
    cy.get('[data-tour="tour-sidebar-connection"]').click()
    cy.contains('add my own domain').click()
})

Cypress.Commands.add("buyDomain", (el) => {
    cy.get('.mdc-top-app-bar__section--align-start > .rmwc-icon').click()
    cy.wait(2000)
    cy.get('[data-tour="tour-sidebar-connection"]').click()
    cy.contains('buy short domain').click()
})

Cypress.Commands.add("specifyDomain", (domain) => {
    cy.get('[name="hostname"]').clear().clear()
    cy.get('[name="hostname"]').type(domain)
    cy.wait(2000)
    cy.get(`[class*='rmwc-icon']:contains('search')`).click()
})

Cypress.Commands.add("checkRadio", (el) => {
    cy.get('#goSubdomain').should('not.be.checked')
    cy.get('#linkSubdomain').should('not.be.checked')
    cy.get('#lSubdomain').should('not.be.checked')
    cy.get('#customSubdomain').should('not.be.checked')
    })

Cypress.Commands.add("usedDomain", (personalDomain) => {
    cy.get('input[name="hostname"]').type(personalDomain)
    cy.get('#inuse-domain').check().should('be.checked').and('have.attr', 'type', 'radio')
    })


Cypress.Commands.add("enterSubDomain", (subDomainError) => { 
    cy.get('.mdc-text-field__input[name="customSubdomain"]').type(subDomainError)
    cy.get('.mdc-text-field-helper-text.mdc-text-field-helper-text--persistent.mdc-text-field-helper-text--validation-msg').contains('Invalid')
    cy.get('.mdc-text-field__input[name="customSubdomain"]').clear()
    })

Cypress.Commands.add("shortenEnter", (el) => { 
    cy.get('[data-tour="tour-first-step"]')
    .click()
    .type('https://short.io{enter}')
    cy.get('.container').contains('created')
    cy.get('.linkCreatedDialog__CustomizeAction-sc-1jdvzxa-2 > .sc-gKAblj > .mdc-button__ripple').click()
    cy.get('#link-edit-originalurl').should('have.value','https://short.io')
    cy.get('body').type('{esc}', { force: true })
    cy.get('[data-kind="original-url"]').eq(0).should("contain", "Short.io — White label URL Shortener.")
     }) 

     Cypress.Commands.add("shortenEmpty", (el) => { 
        cy.get(`[class*='rmwc-icon']:contains('check')`).click()
        cy.get(`[class*='rmwc-icon']:contains('error')`).parent().should('contain', 'No originalURL parameter provided')
         }) 

Cypress.Commands.add("shortenTick", (el) => {
    cy.get('[data-tour="tour-first-step"]')
    .click()
    .type('https://google.com')
    cy.get(`[class*='rmwc-icon']:contains('check')`).click()
    cy.get('.container').contains('created')
    cy.get('.linkCreatedDialog__CustomizeAction-sc-1jdvzxa-2 > .sc-gKAblj > .mdc-button__ripple').click()
    cy.get('#link-edit-originalurl').should('have.value','https://google.com')
    cy.get('body').type('{esc}', { force: true })
    cy.get('[data-kind="original-url"]').eq(0).should("contain", "Google")
    }) 

    import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
  failureThreshold: 0.3,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.2 },
  capture: 'viewport',
});

Cypress.Commands.add("setResolution", (size) => {
  if (Cypress._.isArray(size)) {
     cy.viewport(size[0], size[1]);
   } else {
    cy.viewport(size);
  }
 })


// Cypress.Commands.add("shortenPaste", (el) => { 
//     cy.get('.fastShortener__LinkShortener-sc-11o1ayo-1 > .sc-bdnylx > .mdc-text-field__input')
//     .click()
//     .invoke('val', 'https://short.io')
//     .trigger('input')
//     cy.get('.linkEdit__TabHeader-uzczue-7.jhlyND').contains('Edit')
//     cy.get('#link-edit-originalurl').should('have.value','https://short.io')
//     cy.get('[data-mdc-dialog-action="close"]').click()
//     })


// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
