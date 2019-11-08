describe('Test <Button /> component', function() {
  const pageUrl = 'dt-button';

  before(() => {
    cy.visit(pageUrl);
  });

  it('semantic buttons renders properly', function() {
    cy.get(`[data-testid="example-semantic-buttons"]`).matchImageSnapshot();
  });

  it('button updates counter on click', function () {
    cy.get(`[data-testid="example-clickable-button"]`).within(() => {
      cy.contains('Click Me').click().click();
      cy.matchImageSnapshot();
    });
  });
});
