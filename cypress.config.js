const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout:30000,
    pageLoadTimeout:30000,
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: './cypress/results',
        overwrite: false,
        html: false,
        json: true,
    },
    setupNodeEvents(on, config) {
      const environmentName = config.env.environmentName || 'bookCart'
      const environmentFilename = `./${environmentName}.settings.json`
      console.log('loading %s', environmentFilename)
      const settings = require(environmentFilename)
  if (settings.baseUrl) {
      config.baseUrl = settings.baseUrl
  }
  
console.log('CONF', settings.baseUrl, settings)

  if (settings.specPattern) {
    config.specPattern = settings.specPattern
  }
  if (settings.env) {
      config.env = {
      ...config.env,
      ...settings.env,
    }
  }
  console.log('loaded settings for environment %s', environmentName)

  return config
    },
  },
});

