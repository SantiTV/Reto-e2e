describe('Navegación en Pinterest', () => {
    it('visualizar publicaciones', () => {

      cy.visit('https://co.pinterest.com/');
      
      cy.get('body').should('be.visible');
      
      cy.get('a[href="/ideas/"]').contains('Explore').click();
      
      cy.url().should('include', '/ideas/');
      
      cy.get('body').should('be.visible');
      
      // Hacer scroll hacia abajo para visualizar más publicaciones
      cy.scrollTo(0, 500);
      cy.wait(1000);
      
      cy.scrollTo(0, 1000);
      cy.wait(1000);
      
      cy.scrollTo(0, 1500);
      
      cy.get('div').should('exist');
    });
  });