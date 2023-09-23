export interface AppError {
    code: number;
    reason?: string;
    message?: string;
}
export interface ConnectedOuterService {
    name: string;
    version: string;
}
export interface ByBoundingBox {
    topLeft: Point;
    bottomRight: Point;
}
export interface ByDistance {
    distance: number;
    point: Point;
}
export interface ByGeoPolygon {
    points: Array<Point>;
}
export interface Point {
    latitude: number;
    longitude: number;
}
export interface SpatialFilter {
    field: string;
    byBoundingBox?: ByBoundingBox;
    byDistance?: ByDistance;
    byGeoPolygon?: ByGeoPolygon;
}
export interface QueryRequest {
    offset?: number;
    kind: string;
    limit?: number;
    query?: string;
    spatialFilter?: SpatialFilter;
    returnedFields?: Array<string>;
}
export interface QueryResponse {
    results?: Array<Object>;
    totalCount: number;
}
export interface CursorQueryResponse {
    cursor?: string;
    results?: Array<Object>;
    totalCount: number;
}
export interface CursorQueryRequest {
    cursor?: string;
    kind: string;
    limit?: number;
    query?: string;
    spatialFilter?: SpatialFilter;
    returnedFields?: Array<string>;
}
export interface VersionInfo {
    groupId?: string;
    actifactId?: string;
    version?: string;
    buildTime?: string;
    branch?: string;
    commitId?: string;
    commitMessage?: string;
    connectedOuterServices?: Array<ConnectedOuterService>;
}
