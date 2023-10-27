/**
 * OSDU Group SDK
 * A lightweight SDK for interacting with OSDU
 */
export interface MemberRequest {
  /**
   * The starting offset from which to return results
   * @member {string} request
   */
  request?: string;
}

export interface AddMember {
  /**
   * The data partition id or tenant
   * @member {string} dataPartitionId
   */
  dataPartitionId: string;

  /**
   * groupInfoDto
   * @member {string} groupInfoDto
   */
  memberInfoDto: string;
}

export interface MemberResponse {
  /**
   * @member {Array<Object>} results
   */
  results?: Array<Object>;
}
