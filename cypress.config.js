const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      url_qa: "https://app.qa.hoh-cloud.apptoku.com/en/",
      url_stage: "https://app.stage.hoh-cloud.apptoku.com/en/",
      actual_env: "none",
      env_qa: "qa",
      env_stage: "stage"
    }
  },
});
