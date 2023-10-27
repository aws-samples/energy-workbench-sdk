import * as models from "./member.models";
import * as types from "./member.types";
import {Groups, MemberAdd, Members} from "./member.client";

export const MEMBER = {
  ...models,
  ...types,
  Members: Members,
  MemberAdd: MemberAdd,
  Groups: Groups
};
