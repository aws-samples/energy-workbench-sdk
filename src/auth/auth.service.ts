import axios from "axios";

/**
 * Handles authentication and token management.
 */
export class AuthService {
  /**
   * Create an AuthService.
   *
   * @param baseURL - Base URL for application instance
   * @param clientId - Client ID for authentication
   * @param clientSecret - Client secret for authentication
   * @param redirectUri - Redirect URI for authentication
   */
  constructor(
    private baseURL: string,
    private clientId: string,
    private clientSecret: string,
    private redirectUri?: string
  ) {}

  /**
   * Get an auth token using the authorization code flow.
   *
   * @returns Promise resolving with the auth token
   */
  async getAuthToken(): Promise<string> {
    // Declare the base url with the token method
    const url = `${this.baseURL}/token`;

    const response = await axios.post(url, {
      grant_type: "authorization_code",
      client_id: this.clientId,
      client_secret: this.clientSecret,
    });

    return response.data.access_token;
  }

  /**
   * Refresh the auth token using a refresh token.
   *
   * @returns Promise resolving with updated auth token
   */
  async refreshAuthToken(): Promise<string> {
    const response = await axios.post("/token", {
      grant_type: "refresh_token",
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
    });

    return response.data.access_token;
  }
}
