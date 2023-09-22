import { CognitoToken, AuthService } from "../auth";

export abstract class BaseClient {
  protected auth: AuthService;
  protected cognito: CognitoToken;
  protected baseURL: string;
  protected token: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  protected async getAuthToken() {
    this.cognito = new CognitoToken(
      process.env.OSDU_CLIENT_ID,
      process.env.OSDU_USERNAME,
      process.env.OSDU_PASSWORD
    );
    console.log(this.cognito);

    const cognitoToken = await this.cognito.fetchToken();

    console.log(cognitoToken);

    const auth = new AuthService(
      this.baseURL,
      process.env.OSDU_CLIENT_ID,
      cognitoToken
    );
    this.auth = auth;
    console.log(this.auth);

    // Also return it
    return auth;
  }
}
