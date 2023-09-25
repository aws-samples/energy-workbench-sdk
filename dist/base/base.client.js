"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClient = void 0;
const auth_1 = require("../auth");
const pino_1 = require("pino");
const logger = (0, pino_1.default)({
    transport: {
        target: "pino-pretty",
    },
});
class BaseClient {
    constructor(baseURL, cognitoRegion) {
        this.baseURL = baseURL;
        this.cognitoRegion = cognitoRegion;
    }
    async getAuthToken() {
        const region = this.cognitoRegion;
        logger.info(`✍️ Beginning logging of authorization process!`);
        logger.info(`Cognito region is ${region}`);
        const requiredEnvVars = {
            OSDU_CLIENT_ID: process.env.OSDU_CLIENT_ID,
            OSDU_USERNAME: process.env.OSDU_USERNAME,
            OSDU_PASSWORD: process.env.OSDU_PASSWORD,
            REGION: region,
        };
        const missingEnvVars = Object.keys(requiredEnvVars).filter((key) => !requiredEnvVars[key]);
        if (missingEnvVars.length > 0) {
            logger.error(`Missing environment variables: ${missingEnvVars.join(", ")}`);
            process.exit(1);
        }
        else {
            logger.info(`All environment variables present: ${Object.keys(requiredEnvVars).join(", ")}`);
        }
        this.cognito = new auth_1.CognitoToken(process.env.OSDU_CLIENT_ID, process.env.OSDU_USERNAME, process.env.OSDU_PASSWORD, region);
        Object.keys(this.cognito).forEach((key) => {
            logger.info({ [key]: this.cognito[key] });
        });
        const cognitoToken = await this.cognito.fetchToken();
        logger.info(`Cognito token is ${cognitoToken}`);
        const auth = new auth_1.AuthService(this.baseURL, process.env.OSDU_CLIENT_ID, cognitoToken);
        Object.keys(auth).forEach((key) => {
            logger.info({ [key]: auth[key] });
        });
        this.auth = auth;
        logger.info(`The auth token created is ${auth}`);
        return auth;
    }
}
exports.BaseClient = BaseClient;
