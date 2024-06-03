import { CognitoToken, AuthService } from "../auth";
import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

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

    // logger.info(`Cognito region is ${region}`);

    const requiredEnvVars = {
      OSDU_CLIENT_ID: process.env.OSDU_CLIENT_ID,
      OSDU_USERNAME: process.env.OSDU_USERNAME,
      OSDU_PASSWORD: process.env.OSDU_PASSWORD,
      REGION: region,
    };

    const missingEnvVars = Object.keys(requiredEnvVars).filter(
      (key) => !requiredEnvVars[key]
    );

    if (missingEnvVars.length > 0) {
      logger.error(
        `Missing environment variables: ${missingEnvVars.join(", ")}`
      );
      throw new Error(`Missing environment variables: ${missingEnvVars.join(", ")}`);
    }

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
    //
    // Object.keys(auth).forEach((key) => {
    //   logger.info({ [key]: auth[key] });
    // });

    this.auth = auth;

    return auth;
  }
}
