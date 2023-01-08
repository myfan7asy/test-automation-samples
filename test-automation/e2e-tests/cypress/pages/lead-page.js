class Lead {
    newButton = "//div[@title='New']";
    nextButton = "//button/span[starts-with(text(), 'Next')]";
    recordTypeTitle = "//div[@class='actionBody']//h2";
    countryDropdown = "//label[contains(text(), 'Country*')]/following-sibling::div[not(@id)]";
    businessTypeDropdown = "//label[contains(text(), 'Business Type')]/following-sibling::div[not(@id)]";
    leadStatusDropdown = "//label[contains(text(), 'Lead Status')]/following-sibling::div[not(@id)]";
    lastNameInput = "//input[@name='lastName']";
    businessNameInput = "//input[@name='Company']";
    saveButton = "//button[@name='SaveEdit']";
    successMessage = "//div[@role='alertdialog' and @data-key='success']";
    businessNameValue = "//span[text()='Business name']/parent::div/following-sibling::div//lightning-formatted-text";
    leadOwnerValue = "//span[text()='Lead Owner']/parent::div/following-sibling::div//slot[@force-lookup_lookup]";
    contactNumberInput = "//input[@name='MobilePhone']";
    editButton = "//button[@name='Edit']";
};

class standardLead extends Lead {
    standardRadioButton = "//span[starts-with(text(), 'Standard')]";
    countryDropdownOption = "//span[@title='Germany']";
    businessTypeDropdownOption = "//span[@title='Gastronomy']";
    leadStatusDropdownOption = "//span[@title='Open']";
};

module.exports = { standardLead};
