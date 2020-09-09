class login {

    logIn() {
        return cy.get('a.link.link_ordinary.actionButtonsWrapper__link')
    }

    getEmail() {
        return cy.get('input.mdc-text-field__input[name="email"]')
    }

    getPassword() {
        return cy.get('input.mdc-text-field__input[name="password"]')
    }

    submit() {
        return cy.get('div.mdc-button__ripple')
    }

    pass() {
        return cy.get('#textfield-Password-label')
    }

    em() {
        return cy.get('#textfield-E-mail-label')
    }

    helperError() {
        return cy.get('div.mdc-text-field-helper-line')
    }

    erPas() {
        return cy.get('.components__PasswordFieldContainer-baz1qn-5 > .mdc-text-field-helper-line > .mdc-text-field-helper-text')
    }

    toggle() {
        return cy.get('input.mdc-checkbox__native-control')
    }
}

export default login;

