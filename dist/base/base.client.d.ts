import { CognitoToken, AuthService } from "../auth";
export declare abstract class BaseClient {
    protected auth: AuthService;
    protected cognito: CognitoToken;
    protected baseURL: string;
    cognitoRegion: string;
    protected token: string;
    constructor(baseURL: string, cognitoRegion: string);
    protected getAuthToken(): Promise<AuthService>;
}
