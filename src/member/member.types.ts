
export enum UserRole {
  OWNER = "OWNER",
  MEMBER = "MEMBER"
}

export interface Member {
  email: string;
  role: UserRole;
}

export interface MemberList {
  members: Member[];
}
