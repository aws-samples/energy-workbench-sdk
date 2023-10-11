import * as models from "./group.models";
import * as types from "./group.types";
import { GroupClient } from "./group.client";

export const Group = {
  ...models,
  ...types,
  GroupClient,
};
