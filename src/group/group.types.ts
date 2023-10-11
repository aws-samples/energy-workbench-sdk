import { GroupResponse } from "./group.models";

export enum GroupIndex {
  Groups = "groups"
}

export interface GroupResp extends GroupResponse {
  index: GroupIndex;
}
