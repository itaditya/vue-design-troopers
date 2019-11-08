describe('Test <Button /> components', function() {
  const pageUrl = 'dt-button';

  before(() => {
    cy.visit(pageUrl);
  });

  it('all buttons renders properly', function() {
    cy.percySnapshot();
  });

  it('button updates counter on click', function() {
    cy.get(`[data-testid="example-clickable-button"]`).within(() => {
      cy.contains('Click Me').click().click();
      cy.percySnapshot();
    });
  })
});
