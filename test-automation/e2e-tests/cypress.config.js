const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  includeShadowDom: true,
  defaultCommandTimeout: 8000,
  env: {
    DEVAccountManager: {
      un: "test1",
      pw: "test1"
    },
    PREPRODAccountManager: {
      un: "test2",
      pw: "test2"
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
})
