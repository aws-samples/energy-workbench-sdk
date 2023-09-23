import axios from "axios";

import {
  QueryRequest,
  QueryResponse,
  CursorQueryRequest,
  CursorQueryResponse,
} from "./search.models";
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

    const { data } = await axios.post(url, request, config);

    return data;
  }

  /**
   * Search records with cursor.
   *
   * @param request - Cursor search request
   * @returns Promise resolving to cursor search results
   */
  async queryWithCursor(
    request: CursorQueryRequest
  ): Promise<CursorQueryResponse> {
    const token = await this.auth.getAuthToken();

    const url = `${this.baseURL}/api/search/v2/query_with_cursor`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "data-partition-id": "osdu",
      },
    };

    const { data } = await axios.post(url, request, config);

    return data;
  }
}
