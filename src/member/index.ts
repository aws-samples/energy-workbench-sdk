import * as types from "./member.types";
import { Groups, MemberAdd, Members } from "./member.client";

export const MEMBER = {
  ...types,
  Members: Members,
  MemberAdd: MemberAdd,
  Groups: Groups,
};
