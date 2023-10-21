import * as models from "./user.models";
import * as types from "./user.types";
import { AddUser } from "./user.client";

export const USER = {
  ...models,
  ...types,
  AddUser: AddUser
};
