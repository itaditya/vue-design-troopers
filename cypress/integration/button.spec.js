describe('Test <Button /> component', function() {
  const pageUrl = 'dt-button';

  before(() => {
    cy.visit(pageUrl);
  });

  it('triggers the onClick callback when user clicks', function() {
    cy.get(`[data-testid="example-clickable-button"]`).within(() => {
      cy.get('p').should('contain', '0 clicks so far');
      cy.contains('Click Me').click();
      cy.get('p').should('contain', '1 clicks so far');
      cy.contains('Click Me').click().click();
      cy.get('p').should('contain', '3 clicks so far');
    });
  });
});
