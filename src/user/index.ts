import * as types from "./user.types";
import { AddUser } from "./user.client";

export const USER = {
  ...types,
  AddUser: AddUser,
};
