describe('Pinterest - Carga infinita en la página principal', () => {
    it('Carga más pines al hacer scroll sin iniciar sesión ni buscar', () => {
        cy.visit('https://www.pinterest.com/ideas/');


        // Esperar que aparezcan algunos pines iniciales
        cy.get('[data-test-id="pin"]', { timeout: 10000 }).should('have.length.greaterThan', 0);



        // Hacer scroll hacia abajo 3 veces
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('bottom');
        cy.wait(2000);

    });
});

