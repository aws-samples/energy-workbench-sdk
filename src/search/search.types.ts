import { QueryRequest, QueryResponse, SpatialFilter } from "./search.models";

export enum SearchIndex {
  Wells = "wells",
  Facilities = "facilities",
}

export interface SearchFilters {
  query?: string;
  spatialFilter?: SpatialFilter;
}

export interface SearchOptions {
  limit?: number;
  offset?: number;
  fields?: string[];
}

export interface SearchRequest extends QueryRequest {
  filters?: SearchFilters;
  options?: SearchOptions;
}

export interface SearchResult extends QueryResponse {
  index: SearchIndex;
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export enum UnitsOfMeasure {
  Meters = "m",
  Miles = "mi",
}
