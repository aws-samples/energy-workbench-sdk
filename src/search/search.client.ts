import axios from "axios";

import { QueryRequest, QueryResponse } from "./search.types";
import { BaseClient } from "../base";

/**
 * Client for accessing OSDU Search API.
 */
export class SearchClient extends BaseClient {
  protected baseURL: string;
  public cognitoRegion: string;
  /**
   * Create SearchClient.
   *
   * @param baseURL - Base URL for the OSDU instance in use
   * @param cognitoRegion - AWS region for the cognito
   */
  constructor(baseURL: string, cognitoRegion: string) {
    super(baseURL, cognitoRegion);
  }

  /**
   * Search records.
   *
   * @param request - Search request
   * @returns Promise resolving to search results
   */
  async query(request: QueryRequest): Promise<QueryResponse> {
    const auth = await this.getAuthToken();

    const url = `${this.baseURL}/api/search/v2/query/`;

    const config = {
      headers: {
        Authorization: `Bearer ${auth.clientSecret}`,
        "Content-Type": "application/json",
        "data-partition-id": "osdu",
      },
    };
    try {
      const { data } = await axios.post(url, request, config);
      return data;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", error.message);
      }
      throw error;
    }
  }
}
