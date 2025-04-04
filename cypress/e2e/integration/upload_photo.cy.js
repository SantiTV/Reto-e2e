describe('Login en Pinterest', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://www.pinterest.com/login/');
            cy.get('input[name="id"]').type('user');
            cy.get('input[name="password"]').type('Contraseña');
            cy.get('button[type="submit"]').click();
            cy.url().should('include', '/homefeed');
        });
    });



    it('Debería permitir buscar contenido y mostrar resultados', () => {
        cy.get('input[placeholder="Buscar"]').type('paisajes{enter}');
        cy.url().should('include', 'search');
        cy.get('[data-test-id="pin"]').should('exist');
    });
});
