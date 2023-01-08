const { Account } = require("../classes/Account");
const { Data } = require("../classes/Data");
const chai = require("chai");
const expect = chai.expect;

describe('Creation of new Accounts', () => {
    Data.accountList.forEach((accountType) => {
        it(`Create a new [${accountType().Type}] Account`, async () => {
            const newAccount = new Account(accountType);
            
            const createCustomerRequest = await newAccount.createAccount();
            expect(createCustomerRequest.status).to.eq(200);
        }).timeout(25000);
    });
});