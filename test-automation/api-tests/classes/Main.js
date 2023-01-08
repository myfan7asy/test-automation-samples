const axios = require("axios").default;

class Main {
    constructor(recordData) {
        this.recordData = recordData;
    };
    recordData;

    get arguments() {
        if (process.argv) {
            return process.argv.slice(3);
        }
    }

    get orgNameSpacePrefix() {
        if (this.arguments) {
            const orgName = this.arguments[0].toLowerCase();
            if (orgName == 'preprod')
                return 'preprod';
            if (orgName == 'dev' || orgName.startsWith('feature'))
                return 'dev';
            return 'prod';
        }
    }

    get eventBaseUrl() {
        return `https://${this.orgNameSpacePrefix}.test.com/x`;
    }

    get queryBaseUrl() {
        return `https://${this.orgNameSpacePrefix}.test.com/x/?q=`;
    }

    get authToken() {
        if (this.arguments) {
            return this.arguments[1];
        }
    }

    get uniqueId() {
        const generatedId = this.generateUniqueId();
        Object.defineProperty(this, "uniqueId", {
            value: generatedId,
            writable: false,
            configurable: false,
            enumerable: false
        });
        return generatedId;
    }

    generateUniqueId() {
        return (Math.floor(100000000 + Math.random() * 900000000)).toString()
    };

    async callEvent(eventTail, bodyContent, contentType, method = "post") {
        const url = this.eventBaseUrl + eventTail;
        return axios.request({
            method: method,
            url: url,
            data: bodyContent,
            headers: {
                'Authorization': `Bearer ${this.authToken}`,
                'Content-Type': contentType
            }
        });
    };

    async queryRecord(fields, object, conditions) {
        const queryUrl = this.queryBaseUrl + "SELECT+" + fields + "+FROM+" + object + "+WHERE+" + conditions;
        const options = {
            headers: {
                'Authorization': `Bearer ${this.authToken}`
            }
        };
        return axios.get(queryUrl, options);
    };
};

module.exports = { Main };