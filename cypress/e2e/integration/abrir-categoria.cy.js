describe('Test de abrir una categoría de pinterest', () => {
    beforeEach(() => {
        cy.visit('https://co.pinterest.com/')

        cy.get('a[href="/ideas/"]').click()

        cy.wait(5000)
    })
    it('Abrir una categoría', () => {

        cy.get('[data-test-id="topic-rep-title"]').contains('Animals').click({ force: true })

        cy.wait(2000)
        // Verificar que la URL contenga "animales"
        cy.url().should('include', '/animals')

        // Verificar que exista la sección de intereses relacionados
        cy.get('div.zI7.iyn.Hsu').contains('h2', 'Related interests').should('exist');
        // Verificar usando la clase
        cy.get('h2.lH1.dyH.iFc.H2s.GTB.X8m.zDA.IZT').contains('Related interests').should('exist');

        // Verificar que exista el titulo Animals
        cy.get('h1.lH1.dyH.iFc.H2s.R-d.qX7.tg7.IZT').should('exist');
        // Verificar el contenido del texto
        cy.get('h1.lH1.dyH.iFc.H2s.R-d.qX7.tg7.IZT').should('contain', 'Animals');

    })


})