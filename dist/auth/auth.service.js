"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const axios_1 = require("axios");
class AuthService {
    constructor(baseURL, clientId, clientSecret, redirectUri) {
        this.baseURL = baseURL;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectUri = redirectUri;
    }
    async getAuthToken() {
        const url = `${this.baseURL}/token`;
        const response = await axios_1.default.post(url, {
            grant_type: "authorization_code",
            client_id: this.clientId,
            client_secret: this.clientSecret,
        });
        return response.data.access_token;
    }
    async refreshAuthToken() {
        const response = await axios_1.default.post("/token", {
            grant_type: "refresh_token",
            client_id: this.clientId,
            client_secret: this.clientSecret,
            redirect_uri: this.redirectUri,
        });
        return response.data.access_token;
    }
}
exports.AuthService = AuthService;
