describe('Login en Pinterest', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://www.pinterest.com/login/');
            cy.get('input[name="id"]').type('santtv76@gmail.com ');
            cy.get('input[name="password"]').type('Pinterest123');
            cy.get('button[type="submit"]').click();
            cy.url().should('include', '/homefeed');
        });
    });

});
