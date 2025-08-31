const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e2ohkm',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      
    },
  },
});
