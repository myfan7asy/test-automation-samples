class Helper {
    static generateRandomId() {
        return Cypress._.random(0, 1e9);
    };

    get orgNameSpacePrefix() {
        const orgName = Cypress.env('env').toLowerCase();
        if (orgName == 'preprod')
            return 'preprod';
        if (orgName == 'dev' || orgName.startsWith('feature'))
            return 'dev';
        return 'prod';
    }

    get envNameSpacePrefix() {
        const orgName = Cypress.env('env').toLowerCase();
        if (orgName == 'master')
            return 'login';
        else
            return 'test';
    }

    get authToken() {
        return Cypress.env('token');
    }
}

module.exports = { Helper };