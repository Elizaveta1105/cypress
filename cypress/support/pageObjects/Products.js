class Products {
    getCheckout() {
        return cy.get('a.nav-link.btn')
    }

}

export default Products; //makes file available for every file