const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e2ohkm',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      
    },
  },
});
