import * as models from "./member.models";
import * as types from "./member.types";
import { Members} from "./member.client";

export const MEMBER = {
  ...models,
  ...types,
  Members: Members
};
