class Payloads {
    static getLeadPayload = (country, randomId) => {
        return {
            "Lead": {
                "Country__c": `${country}`,
                "Business_type__c": "Bar",
                "Company": "Company",
                "LName": `LName ${randomId}`,
                "FName": "FName",
                "Email": `test${randomId}@gmail.com`,
            }
        }
    };
};
module.exports = { Payloads };