const { Helper } = require("./helper.cy.js");

const helper = new Helper()
Cypress.Commands.add('loginToSalesforce', (user) => {
   cy.request({
      body: user,
      form: true,
      method: 'POST',
      url: `https://${helper.envNameSpacePrefix}.test.com`,
   });
});

Cypress.Commands.add('getWebElement', (elemSelector) => {
   return cy.xpath(elemSelector)
});

Cypress.Commands.add('getDropdownAndSelectOption', (dropdownSelector, dropdownOptionSelector) => {
   cy.xpath(dropdownSelector).click()
   cy.xpath(dropdownOptionSelector).click()
});

Cypress.Commands.add('createNewRecord', (payload, endpointPart) => {
   cy.request({
      method: 'POST',
      url: `https://${helper.orgNameSpacePrefix}.test.com/${endpointPart}`,
      headers: {
         'Authorization': `Bearer ${Cypress.env('token')}`,
      },
      body: payload
   })
});

Cypress.Commands.add('openCreatedRecord', (query, object) => {
   cy.request({
      method: 'GET',
      url: `https://${helper.orgNameSpacePrefix}.test.com/?q=` + query,
      headers: {
         'Authorization': `Bearer ${Cypress.env('token')}`
      }
   }).then(response => {
      const recordId = response.body.records[0]["Id"];
      cy.visit(`https://${helper.orgNameSpacePrefix}.test.com/${object}/${recordId}`);
   });
});

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
   if (resizeObserverLoopErrRe.test(err.message)) {
      return false
   }
})
