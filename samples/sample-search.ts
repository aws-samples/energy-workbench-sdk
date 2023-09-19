/**
 * Demo of using OsduSearch SDK
 */

import { OsduSearch } from "../src/search/models";

/**
 * Client for accessing Osdu Search API.
 */
class OsduSearchClient {
  /**
   * Query for records.
   *
   * @param request - Query request parameters
   * @returns Promise resolving to query response
   *
   * @example
   *
   * const request = {
   *  kind: 'test',
   *  limit: 100
   * };
   *
   * const response = await client.queryRecords(request);
   *
   */
  async queryRecords(
    request: OsduSearch.QueryRequest
  ): Promise<OsduSearch.QueryResponse> {
    // Call API
  }

  /**
   * Query records with cursor for pagination.
   *
   * @param request - Cursor query request
   * @returns Promise resolving to cursor query response
   *
   * @example
   *
   * const request = {
   *  kind: 'test',
   *  cursor: 'xyz',
   *  limit: 100
   * };
   *
   * const response = await client.queryWithCursor(request);
   *
   */
  async queryWithCursor(
    request: OsduSearch.CursorQueryRequest
  ): Promise<OsduSearch.CursorQueryResponse> {
    // Call API
  }
}

// Usage:

const client = new OsduSearchClient();

const queryRequest: OsduSearch.QueryRequest = {
  kind: "test",
  limit: 100,
};

const records = await client.queryRecords(queryRequest);
