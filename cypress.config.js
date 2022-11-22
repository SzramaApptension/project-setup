const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 360,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
    }
  },
  env: {
    url: 'http://localhost:1234',
    lol: 'qa'
  }
});
