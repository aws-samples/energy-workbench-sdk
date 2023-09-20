import * as models from "./search.models";
import * as types from "./search.types";
import { OsduSearchClient } from "./search.client";

export const OsduSearch = {
  ...models,
  ...types,
  OsduSearchClient,
};
