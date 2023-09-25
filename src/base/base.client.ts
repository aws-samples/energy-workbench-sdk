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

    logger.info(`✍️ Beginning logging of authorization process!`);

    logger.info(`Cognito region is ${region}`);

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
      process.exit(1);
    } else {
      logger.info(
        `All environment variables present: ${Object.keys(requiredEnvVars).join(
          ", "
        )}`
      );
    }

    this.cognito = new CognitoToken(
      process.env.OSDU_CLIENT_ID,
      process.env.OSDU_USERNAME,
      process.env.OSDU_PASSWORD,
      region
    );

    Object.keys(this.cognito).forEach((key) => {
      logger.info({ [key]: this.cognito[key] });
    });

    const cognitoToken = await this.cognito.fetchToken();

    logger.info(`Cognito token is ${cognitoToken}`);

    const auth = new AuthService(
      this.baseURL,
      process.env.OSDU_CLIENT_ID,
      cognitoToken
    );

    Object.keys(auth).forEach((key) => {
      logger.info({ [key]: auth[key] });
    });

    this.auth = auth;

    logger.info(`The auth token created is ${auth}`);

    return auth;
  }
}
