const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    
  },
  env:{
    url: "https://app.stage.hoh-cloud.apptoku.com/en/",
    env_name: "stage"
  }
})