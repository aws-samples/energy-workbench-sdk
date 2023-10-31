import * as types from "./group.types";
import { GroupList, GroupAdd } from "./group.client";

export const GROUP = {
  ...types,
  GroupList: GroupList,
  GroupAdd: GroupAdd,
};
