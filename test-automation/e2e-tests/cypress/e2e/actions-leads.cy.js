/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath')

const { standardLead, fraudLead } = require("../pages/lead-page.js");
const { Helper } = require("../support/helper.cy.js");
const { Payloads } = require("../support/payloads.js");

describe('Actions on Leads performed by [Account Manager]', () => {
  let uuid;
  beforeEach(() => {
    cy.loginToSalesforce(Cypress.env(`${Cypress.env('env')}AccountManager`))
    cy.visit('https://test.com/x')
    uuid = Helper.generateRandomId()
  });

  it('Create a new Lead', () => {
    const newLead = new standardLead();

    cy.getWebElement(newLead.newButton)
      .click()
    cy.getWebElement(newLead.standardRadioButton)
      .click()
    cy.getWebElement(newLead.nextButton)
      .click()

    cy.getWebElement(newLead.recordTypeTitle)
      .should('have.text', 'New Lead: Standard')

    cy.getDropdownAndSelectOption(newLead.countryDropdown, newLead.countryDropdownOption)
    cy.getDropdownAndSelectOption(newLead.businessTypeDropdown, newLead.businessTypeDropdownOption)
    cy.getDropdownAndSelectOption(newLead.leadStatusDropdown, newLead.leadStatusDropdown)
    cy.getWebElement(newLead.lastNameInput)
      .clear().type("LName " + uuid)
    cy.getWebElement(newLead.businessNameInput)
      .clear().type("BName " + uuid)
    cy.getWebElement(newLead.saveButton)
      .click()

    cy.getWebElement(newLead.successMessage)
      .should('be.visible')

    cy.getWebElement(newLead.businessNameValue)
      .should('contain', uuid.toString())
  });

  it('Edit a Lead', () => {
    const newLead = new standardLead();
    
    const endpointPart = "leads";
    const query = `SELECT+Id+from+Lead+Where+Lead_Id__c='${uuid}'`;
    const leadPayload = Payloads.getLeadPayload("de", uuid);

    cy.createNewRecord(leadPayload, endpointPart);
    cy.openCreatedRecord(query, "Lead");

    cy.getWebElement(newLead.editButton)
    .click()
    cy.getWebElement(newLead.businessNameInput)
    .clear().type("BName " + uuid*2)
    cy.getWebElement(newLead.saveButton)
    .click()

    cy.getWebElement(newLead.successMessage)
    .should('be.visible')

    cy.getWebElement(newLead.businessNameValue)
    .should('contain', (uuid*2).toString())
  });
})