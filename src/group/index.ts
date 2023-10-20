import * as models from "./group.models";
import * as types from "./group.types";
import { GroupList, GroupAdd } from "./group.client";

export const GROUP = {
  ...models,
  ...types,
  GroupList: GroupList,
  GroupAdd: GroupAdd
};
