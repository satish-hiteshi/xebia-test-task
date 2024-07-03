describe('Product list page', () => {
  beforeEach(() => {
    cy.visit('/en/US/product');
  });

  it('should display 12 products', () => {
    const expectedProductCount = 12;

    // Check that the correct number of products are displayed
    cy.get('[data-testid="products"]').should(
      'have.length',
      expectedProductCount,
    );

    // Check each product for necessary elements
    cy.get('[data-testid="products"]').each($product => {
      cy.wrap($product).find('img').should('be.visible');
      cy.wrap($product).find('span').should('have.length', 3);
      cy.wrap($product).find('button').should('contain', 'Buy Now');
    });
  });
});
