"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClient = void 0;
const auth_1 = require("../auth");
class BaseClient {
    constructor(baseURL, cognitoRegion) {
        this.baseURL = baseURL;
        this.cognitoRegion = cognitoRegion;
    }
    async getAuthToken() {
        const region = this.cognitoRegion;
        this.cognito = new auth_1.CognitoToken(process.env.OSDU_CLIENT_ID, process.env.OSDU_USERNAME, process.env.OSDU_PASSWORD, region);
        const cognitoToken = await this.cognito.fetchToken();
        const auth = new auth_1.AuthService(this.baseURL, process.env.OSDU_CLIENT_ID, cognitoToken);
        this.auth = auth;
        return auth;
    }
}
exports.BaseClient = BaseClient;
