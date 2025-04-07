describe('Buscar publicaciones en Pinterest', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://www.pinterest.com/login/');
            cy.get('input[name="id"]').type('user');
            cy.get('input[name="password"]').type('Contraseña');
            cy.get('button[type="submit"]').click();
            cy.url().should('include', '/homefeed');
        });
        cy.visit('https://www.pinterest.com/homefeed');
    });

    it('Debería buscar publicaciones y mostrar resultados', () => {
        cy.get('input[placeholder="Buscar"]').clear().type('paisajes{enter}');
        cy.url().should('include', '/search');
        cy.get('[data-test-id="pin"]').should('exist');
        cy.get('[data-test-id="pin"]').its('length').should('be.gt', 0);
    });
});
