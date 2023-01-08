class Data {
    static getFirstAccountData = (uniqueId) => {
        return {
            "Type": "First_Type",
            "Account": {
                "AccountName": `Name - ${uniqueId}`,
                "Language": "ENG",
                "Country": "NL",
                "Address": "Elk Street"
            },
            "Contact": {
                "FName": "FName",
                "LName": `LName ${uniqueId}`,
                "MobilePhone": `+440${uniqueId}`,
                "Email": `test${uniqueId}@gmail.com`
            }
        }
    };

    static getSecondAccountData = (uniqueId) => {
        return {
            "Type": "Second_Type",
            "Account": {
                "AccountName": `Name - ${uniqueId}`,
                "Language": "GER",
                "Country": "DE",
                "Address": "Bulk Street"
            },
            "Contact": {
                "FName": "FName",
                "LName": `LName ${uniqueId}`,
                "MobilePhone": `+550${uniqueId}`,
                "Email": `test${uniqueId}@gmail.com`
            }
        }
    };

    static accountList = [
        this.getFirstAccountData,
        this.getSecondAccountData,
    ];

    static updateAccountData = (uniqueId, accountType) => {
        return {
            "Type": `${accountType}`,
            "Account": {
                "AccountName": `New Name - ${uniqueId}`,
                "Language": "FRA",
                "Country": "FR",
                "Address": "New Street"
            },
            "Contact": {
                "FName": "New FName",
                "LName": `New LName ${uniqueId}`,
                "MobilePhone": `+990${uniqueId}`,
                "Email": `test+new${uniqueId}@gmail.com`
            }
        };
    };
};

module.exports = { Data };