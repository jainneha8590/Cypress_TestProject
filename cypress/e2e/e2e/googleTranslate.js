describe('Google Translate webpage', function() {
    it('open website HomePage', function() {
       
        cy.visit('https://www.deepl.com/en/translator');
        cy.contains('DeepL');
        cy.get('[data-testid="menu-account-out-btn"]').click();
        cy.get('[data-testid="menu-login-username"]').type('jainneha8590@gmail.com');
        cy.get('[data-testid="menu-login-password"]').type('neha08051990');
        cy.get('[data-testid="menu-login-submit"]').click();
        cy.wait(1000);
        cy.get('#text-tab-subheading').click();
        cy.get('[data-testid="translator-source-input"] > [contenteditable="true"]').type('i am happy ');

        // Intercept the request and stub the response
        cy.intercept('POST', 'https://www2.deepl.com/jsonrpc?method=LMT_handleAdditionalData').as('handleAdditionalDataRequest');
        
        // Click on the account button
        cy.get('[data-testid="menu-account-out-btn"]').click();
       
        // Check if the "Log in to your account" text exists
        cy.contains('Log in to your account');

        // Wait for the interception to complete
        cy.wait('@handleAdditionalDataRequest');
       
    });

    it ('login in website ',function(){
        


    })
});

    
       
       




 