class reg {

    getEmail() {
        return cy.get('[aria-labelledby="email-label"]')
    }

    clearEmail() {
        return cy.get('input.mdc-text-field__input') 
    }

    createAccount() {
        return cy.get('div.mdc-button__ripple')
    }

    errorEmail() {
        return cy.get('#email-label')
    }

    bannerError() {
        return cy.get('.mdc-banner__content > .mdc-typography--body1')
    }

    closeButton() {
        return cy.get('.mdc-banner__actions > .mdc-ripple-upgraded > .mdc-button__ripple')
    }
}

export default reg;

