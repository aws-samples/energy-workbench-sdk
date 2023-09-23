import { QueryRequest, QueryResponse, CursorQueryRequest, CursorQueryResponse } from "./search.models";
import { BaseClient } from "../base";
export declare class SearchClient extends BaseClient {
    protected baseURL: string;
    cognitoRegion: string;
    constructor(baseURL: string, cognitoRegion: string);
    query(request: QueryRequest): Promise<QueryResponse>;
    queryWithCursor(request: CursorQueryRequest): Promise<CursorQueryResponse>;
}
