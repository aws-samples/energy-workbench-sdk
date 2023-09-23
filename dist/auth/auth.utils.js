"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoToken = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
class CognitoToken {
    constructor(clientId, username, password, cognitoRegion) {
        this.clientId = clientId;
        this.username = username;
        this.password = password;
        this.cognitoRegion = cognitoRegion;
        this.client = new client_cognito_identity_provider_1.CognitoIdentityProviderClient({
            region: cognitoRegion,
        });
    }
    async fetchToken() {
        const command = new client_cognito_identity_provider_1.InitiateAuthCommand({
            AuthFlow: client_cognito_identity_provider_1.AuthFlowType.USER_PASSWORD_AUTH,
            AuthParameters: {
                USERNAME: this.username,
                PASSWORD: this.password,
            },
            ClientId: this.clientId,
        });
        const response = await this.client.send(command);
        this.token = await response.AuthenticationResult.AccessToken;
        return this.token;
    }
}
exports.CognitoToken = CognitoToken;
