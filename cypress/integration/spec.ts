describe('Smoke Tests', () => {
  it('should visit the initial dashboard page', () => {
    cy.visit('/');
    cy.contains('Dynamic Dashboard');
  });

  it('should redirect to dashboard page by default', () => {
    cy.visit('/');
    cy.url().should('include', '/dashboard');
  });

  it('should handle unknown urls', () => {
    cy.visit('/foo/bar');
    cy.url().should('include', '/dashboard');
  });
});
