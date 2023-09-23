import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
export declare class CognitoToken {
    private clientId;
    private username;
    private password;
    cognitoRegion: string;
    client: CognitoIdentityProviderClient;
    token: string;
    constructor(clientId: string, username: string, password: string, cognitoRegion: string);
    fetchToken(): Promise<string>;
}
