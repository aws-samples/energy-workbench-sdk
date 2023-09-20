import * as models from "./search.models";
import * as types from "./search.types";
import { SearchClient } from "./search.client";

export const Search = {
  ...models,
  ...types,
  SearchClient,
};
