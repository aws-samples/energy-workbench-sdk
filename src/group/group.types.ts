export enum GroupIndex {
  Groups = "groups",
}

export interface GroupResp extends GroupResponse {
  index: GroupIndex;
}

export interface GroupRequest {
  /**
   * The starting offset from which to return results
   * @member {number} offset
   */
  request?: string;
}

export interface AddGroup {
  /**
   * The data partition id or tenant
   * @member {string} dataPartitionId
   */
  dataPartitionId: string;

  /**
   * groupInfoDto
   * @member {string} groupInfoDto
   */
  groupInfoDto: string;
}

export interface GroupResponse {
  /**
   * @member {Array<Object>} results
   */
  results?: Array<Object>;
}
