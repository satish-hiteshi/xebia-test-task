describe('Menu Component', () => {
    beforeEach(() => {
      cy.visit('/en/US/product');
    });
  
    it('should display the user avatar on header', () => {
      // user context Mocking 
      cy.window().then(window => {
        const userContext = window.UserContext;
        if (userContext) {
          userContext.users = {
            avatar:
              'https://www.blu.com/assets/ekvyfobrxnqa/3KnddNk486m6BxUZB62UNA/5d3dc989c8d600c309164103944b1b24/cigar.jpg?sw=64&sh=64&sm=fit',
          };
        }
      });
  
      // Check avatar visiblity
      cy.get('[data-testid="usericon"]').should('be.visible');
      cy.get('[data-testid="usericon"]').should(
        'have.attr',
        'src',
        'https://www.blu.com/assets/ekvyfobrxnqa/3KnddNk486m6BxUZB62UNA/5d3dc989c8d600c309164103944b1b24/cigar.jpg?sw=64&sh=64&sm=fit',
      );
    });

    it('hide and show the menu on scroll down and up', () => {
      cy.get('menu').should('be.visible');
  
      // Scroll 
      cy.scrollTo(0, 500);
      cy.get('menu').should('not.be.visible');
      cy.scrollTo(0, 0);
      cy.get('menu').should('be.visible');
    });
  });
  