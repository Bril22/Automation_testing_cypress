const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  env: {
    foo: "bar"
  },
  logLevel: "error",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  }
});
