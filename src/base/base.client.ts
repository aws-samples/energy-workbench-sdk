import { CognitoToken, AuthService } from "../auth";

export abstract class BaseClient {
  protected auth: AuthService;
  protected cognito: CognitoToken;
  protected baseURL: string;
  public cognitoRegion: string;
  protected token: string;

  constructor(baseURL: string, cognitoRegion: string) {
    this.baseURL = baseURL;
    this.cognitoRegion = cognitoRegion;
  }

  protected async getAuthToken() {
    const region = this.cognitoRegion;

    this.cognito = new CognitoToken(
      process.env.OSDU_CLIENT_ID,
      process.env.OSDU_USERNAME,
      process.env.OSDU_PASSWORD,
      region
    );

    const cognitoToken = await this.cognito.fetchToken();

    const auth = new AuthService(
      this.baseURL,
      process.env.OSDU_CLIENT_ID,
      cognitoToken
    );
    this.auth = auth;

    return auth;
  }
}
