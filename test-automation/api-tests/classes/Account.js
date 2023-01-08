const { Main } = require("../classes/Main.js");

class Account extends Main {
    createCustomerURLTail = "v2/placeholder";

    contentType = "application/json";

    async createAccount() {
        return this.callEvent(this.createCustomerURLTail, this.recordData(this.uniqueId), this.contentType);
    };

    async updateAccount(updateAccountTail, updateAccountData) {
        return this.callEvent(updateAccountTail, updateAccountData, this.contentType, "put");
    };

    async getCustomerUpdateURLTail(accountSfId) {
        return `/${accountSfId}`;
    };
}

module.exports = { Account };