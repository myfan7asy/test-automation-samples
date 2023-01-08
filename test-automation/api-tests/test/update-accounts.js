const { Account } = require("../classes/Account");
const { Data } = require("../classes/Data");
const chai = require("chai");
const expect = chai.expect;

describe('Update of existing Accounts', () => {
    const contactFields = "Id";
    const contactObject = "Contact";

    const accountFields = "Id";
    const accountObject = "Account";

    Data.accountList.forEach((accountType) => {
        const customerType = accountType().Type;

        it(`Create a new [${customerType}] Account and update it`, async () => {
            const newAccount = new Account(accountType);
            const contactConditions = `Account.Customer_Id__c='${newAccount.uniqueId}'`;
            const accountConditions = `Customer_Id__c='${newAccount.uniqueId}'`;

            await newAccount.createAccount();

            const contactQuery = await newAccount.queryRecord(contactFields, contactObject, contactConditions);
            const contactSfId = contactQuery.data.records[0].Id;

            const accountQuery = await newAccount.queryRecord(accountFields, accountObject, accountConditions);
            const accountSfId = accountQuery.data.records[0].Id;

            const customerUpdateURLTail = await newAccount.getCustomerUpdateURLTail(accountSfId);
            const updateData = Data.updateAccountData(newAccount.uniqueId, customerType, contactSfId);

            const updateCustomerRequest = await newAccount.updateAccount(customerUpdateURLTail, updateData);
            expect(updateCustomerRequest.status).to.eq(200);
        }).timeout(25000);
    });
});