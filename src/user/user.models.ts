/**
 * OSDU Group SDK
 * A lightweight SDK for interacting with OSDU
 */
export interface UserRequest {
  /**
   * The starting offset from which to return results
   * @member {string} request
   */
  request?: string;
}

export interface UserResponse {
  /**
   * @member {Array<Object>} results
   */
  results?: Array<Object>;
}
