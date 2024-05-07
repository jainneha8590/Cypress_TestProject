Cypress.Commands.add('clickAcceptAll', () => {
    cy.get('.cc-window').find('.cc-accept-all').click();
  });

Cypress.Commands.add('find_form',()=>{
  cy.get(".modal-1 > .modal-dialog > .modal-content > .modal-body")
})