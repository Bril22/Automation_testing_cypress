describe('Amazon Automation Testing', () => {
  const URL = 'https://www.amazon.com/'
  it('Open URL', () => {
    cy.visit(URL);
    cy.wait(3000);
    cy.get('div.nav-search-field')
      .type('converse')
    cy.get('#nav-search-submit-text')
      .click()
    cy.contains('Hello, sign in')
      .click()
    cy.pause()
    // cy.get('#ap-account-fixup-phone-skip-link')
    //   .click()
      
    // cy.stop()
  })
  // it('Open URL', () => {
  //   cy.visit(URL)
  // })
})