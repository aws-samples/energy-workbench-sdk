import { QueryRequest, QueryResponse, SpatialFilter } from "./search.models";
export declare enum SearchIndex {
    Wells = "wells",
    Facilities = "facilities"
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
export declare enum UnitsOfMeasure {
    Meters = "m",
    Miles = "mi"
}
