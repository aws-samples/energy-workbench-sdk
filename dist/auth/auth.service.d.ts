export declare class AuthService {
    baseURL: string;
    clientId: string;
    clientSecret: string;
    private redirectUri?;
    constructor(baseURL: string, clientId: string, clientSecret: string, redirectUri?: string);
    getAuthToken(): Promise<string>;
    refreshAuthToken(): Promise<string>;
}
