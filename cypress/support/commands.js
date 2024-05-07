Cypress.Commands.add('clickAcceptAll', () => {
    cy.get('.cc-window').find('.cc-accept-all').click();
  });