describe('Sign in with valid data to Amazon', () => {
    const URL = 'https://www.amazon.com/';
    const URL_after_signin = 'https://www.amazon.com/?ref_=nav_ya_signin';

    it('Open URL', () => {
      cy.visit(URL);
      cy.wait(3000);
      // input username
      cy.get('div.nav-line-1-container')
        .click()
      cy.get('#ap_email')
        .type('ciscake22@gmail.com')
      cy.get('#continue')
        .click()
      // input password
      cy.get('#ap_password')
        .type('Testing123')
      cy.get('#signInSubmit')
        .click()
        .url()
        .should('eq', URL_after_signin)
    })
  });
  