const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ksphzc",
  reporter: 'cypress-mochawesome-reporter',
  viewportHeight:1000,
  viewportWidth: 1500,
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/e2e/*.js'
  },
});
