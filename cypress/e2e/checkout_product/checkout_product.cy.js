describe('Checkout Product', () => {
    const URL = 'https://www.amazon.com/';
    const URL_store = 'https://www.amazon.com/stores/Razer/page/CDB96030-A7CF-4B56-B70C-67086A740274?ref_=ast_bln';
    const valid_email = 'ciscake22@gmail.com';
    const valid_password = 'Testing123';
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
      });
    it('Checkout product from seller', () => {
        // open URL
        cy.visit(URL)
        cy.wait(3000);
        // check the cart should be zero
        cy.get('div.nav-right')
        .find('#nav-tools')
        .find('#nav-cart')
        .find('#nav-cart-count')
        .should('have.text', '0')
        cy.wait(3000)
        // search the product
        cy.get('div.nav-search-field')
        .type('razer keyboard gaming')
        cy.get('#nav-search-submit-text')
        .click()
        // pick the product
        cy.get('div.sg-col-20-of-24')
        .find('div.s-main-slot > div')
        .eq(3)
        .find('div.sg-col-inner')
        .find('div.s-product-image-container')
        .click()
        // visit the store
        cy.get('#bylineInfo_feature_div')
        .find('#bylineInfo')
        .click()
        // search the item on the store
        cy.get('div.Header__searchArea__yVqw6')
        .find('input.SearchInput__input__IGt2m')
        .type('keyboard')
        .type('{enter}')
        // pick the item on the store
        cy.get('#ProductGrid-Search')
        .find('div.ProductGrid__gridContainer__bRK6J > ul > li')
        .eq(0)
        .click()
        // see the overview of product
        cy.get('#productOverview_feature_div')
        .find('#poToggleButton')
        .find('.a-expander-prompt')
        .click()
        cy.wait(5000)
        // see the details of product
        cy.get('#featurebullets_feature_div')
        .click()
        cy.wait(5000)
        // add the product to cart
        cy.get('div.a-box-group')
        .find('div.a-section')
        .find('#desktop_qualifiedBuyBox')
        .find('#addToCart_feature_div')
        .click()
        // the cart count should be added
        cy.get('div.nav-right')
        .find('#nav-tools')
        .find('#nav-cart')
        .find('#nav-cart-count')
        .should('have.text', '1')
        cy.wait(3000)
         // checkout the product
        cy.get('#sw-atc-actions')
        .find('#sw-ptc-form')
        .find('#sc-buy-box-ptc-button')
        .trigger('mouseover')
        
        // checkout another product
        cy.visit(URL_store)
        cy.wait(3000)
        cy.get('div.Header__searchArea__yVqw6')
        .find('input.SearchInput__input__IGt2m')
        .type('keyboard')
        .type('{enter}')
        // pick the item on the store
        cy.get('#ProductGrid-Search')
        .find('div.ProductGrid__gridContainer__bRK6J > ul > li')
        .eq(4)
        .click()
        // see the overview of product
        cy.get('#productOverview_feature_div')
        .find('#poToggleButton')
        .find('.a-expander-prompt')
        .click()
        cy.wait(5000)
        // see the details of product
        cy.get('#featurebullets_feature_div')
        .click()
        cy.wait(5000)
        // add the product to cart
        cy.get('div.a-box-group')
        .find('div.a-section')
        .find('#desktop_qualifiedBuyBox')
        .find('#addToCart_feature_div')
        .click()
        // the cart count should be added
        cy.get('div.nav-right')
        .find('#nav-tools')
        .find('#nav-cart')
        .find('#nav-cart-count')
        .should('have.text', '2')
        cy.wait(3000)
        // checkout the product
        cy.get('#sw-atc-actions')
        .find('#sw-ptc-form')
        .find('#sc-buy-box-ptc-button')
        .trigger('mouseover')
        .click()

        // sign in with valid data
        cy.get('#ap_email')
            .type(valid_email)
        cy.get('#continue')
            .click()
        // input password
        cy.get('#ap_password')
            .type(valid_password)
        cy.get('#signInSubmit')
            .click()
    })
})