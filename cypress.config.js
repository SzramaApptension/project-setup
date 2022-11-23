const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 360,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      baseUrl: 'http://localhost:1234'
    }
  },
  env: {
    url: 'https://app.qa.hoh-cloud.apptoku.com/'
  }
});
