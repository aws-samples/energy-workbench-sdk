export interface AppError {
  /**
   * @member {number} code
   */
  code: number;
  /**
   * @member {string} reason
   */
  reason?: string;
  /**
   * @member {string} message
   */
  message?: string;
}

export interface ConnectedOuterService {
  /**
   * Connected outer service name.
   * @member {string} name
   */
  name: string;
  /**
   * Connected outer service version.
   * @member {string} version
   */
  version: string;
}

export interface ByBoundingBox {
  /**
   * @member {Point} topLeft
   */
  topLeft: Point;
  /**
   * @member {Point} bottomRight
   */
  bottomRight: Point;
}

export interface ByDistance {
  /**
   * @member {number} distance
   */
  distance: number;
  /**
   * @member {Point} point
   */
  point: Point;
}

export interface ByGeoPolygon {
  /**
   * @member {Array<Point>} points
   */
  points: Array<Point>;
}

export interface Point {
  /**
   * @member {number} latitude
   */
  latitude: number;
  /**
   * @member {number} longitude
   */
  longitude: number;
}

export interface SpatialFilter {
  /**
   * geo-point field in the index on which filtering will be performed.
   * @member {string} field
   */
  field: string;
  /**
   * @member {ByBoundingBox} byBoundingBox
   */
  byBoundingBox?: ByBoundingBox;
  /**
   * @member {ByDistance} byDistance
   */
  byDistance?: ByDistance;
  /**
   * @member {ByGeoPolygon} byGeoPolygon
   */
  byGeoPolygon?: ByGeoPolygon;
}

export interface QueryRequest {
  /**
   * The starting offset from which to return results
   * @member {number} offset
   */
  offset?: number;

  /**
   * The kind of the record to query e.g. "tenant1:test:well:1.0.0" or "tenant1:test:well:1.0.0,tenant1:test:well:2.0.0" or ["tenant1:test:well:1.0.0", "tenant1:test:well:2.0.0"].
   * @member {string} kind
   */
  kind: string;

  /**
   * The maximum number of results to return from the given offset. If no limit is provided, then it will return 10 items. Max number of items which can be fetched by the query is 1000.
   * @member {number} limit
   */
  limit?: number;

  /**
   * The query string in Lucene query string syntax.
   * @member {string} query
   */
  query?: string;

  /**
   * @member {SpatialFilter} spatialFilter
   */
  spatialFilter?: SpatialFilter;

  /**
   * The fields on which to project the results.
   * @member {Array<string>} returnedFields
   */
  returnedFields?: Array<string>;
}

export interface QueryResponse {
  /**
   * @member {Array<Object>} results
   */
  results?: Array<Object>;

  /**
   * @member {number} totalCount
   */
  totalCount: number;
}

export interface CursorQueryResponse {
  /**
   * @member {string} cursor
   */
  cursor?: string;

  /**
   * @member {Array<Object>} results
   */
  results?: Array<Object>;

  /**
   * @member {number} totalCount
   */
  totalCount: number;
}

export interface CursorQueryRequest {
  /**
   * The cursor value returned from a previous query.
   * @member {string} cursor
   */
  cursor?: string;

  /**
   * The kind of the record to query e.g. "tenant1:test:well:1.0.0" or "tenant1:test:well:1.0.0,tenant1:test:well:2.0.0" or ["tenant1:test:well:1.0.0", "tenant1:test:well:2.0.0"].
   * @member {string} kind
   */
  kind: string;

  /**
   * The maximum number of results to return from the given offset. If no limit is provided, then it will return 10 items. Max number of items which can be fetched by the query is 1000.
   * @member {number} limit
   */
  limit?: number;

  /**
   * The query string in Lucene query string syntax.
   * @member {string} query
   */
  query?: string;

  /**
   * @member {SpatialFilter} spatialFilter
   */
  spatialFilter?: SpatialFilter;

  /**
   * The fields on which to project the results.
   * @member {Array<string>} returnedFields
   */
  returnedFields?: Array<string>;
}

export interface VersionInfo {
  /**
   * Maven artifact group ID.
   * @member {string} groupId
   */
  groupId?: string;

  /**
   * Maven artifact ID.
   * @member {string} actifactId
   */
  actifactId?: string;

  /**
   * Maven artifact version
   * @member {string} version
   */
  version?: string;

  /**
   * Maven artifact build time
   * @member {string} buildTime
   */
  buildTime?: string;

  /**
   * Current git branch
   * @member {string} branch
   */
  branch?: string;

  /**
   * Latest commit hash
   * @member {string} commitId
   */
  commitId?: string;

  /**
   * Latest commit message
   * @member {string} commitMessage
   */
  commitMessage?: string;

  /**
   * Connected outer services information
   * @member {Array<ConnectedOuterService>} connectedOuterServices
   */
  connectedOuterServices?: Array<ConnectedOuterService>;
}

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
