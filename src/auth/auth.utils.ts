import {
  CognitoIdentityProviderClient,
  AuthFlowType,
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";

/**
 * Handles getting auth tokens from Cognito.
 */
export class CognitoToken {
  public client: CognitoIdentityProviderClient;
  public token: string;

  /**
   * Create a CognitoToken instance.
   *
   * @param clientId - Cognito client ID
   * @param username - User username
   * @param password - User password
   * @param cognitoRegion - AWS Cognito Region for auth
   */
  constructor(
    private clientId: string,
    private username: string,
    private password: string,
    public cognitoRegion: string
  ) {
    this.client = new CognitoIdentityProviderClient({
      region: cognitoRegion,
    });
  }

  /**
   * Fetch the auth token from Cognito.
   */
  public async fetchToken() {
    const command = new InitiateAuthCommand({
      AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
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
