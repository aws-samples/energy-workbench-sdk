export enum UserRole {
  OWNER = "OWNER",
  MEMBER = "MEMBER",
}

export interface Member {
  email: string;
  role: UserRole;
}

export interface MemberList {
  members: Member[];
}

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
