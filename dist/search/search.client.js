"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchClient = void 0;
const axios_1 = require("axios");
const base_1 = require("../base");
class SearchClient extends base_1.BaseClient {
    constructor(baseURL, cognitoRegion) {
        super(baseURL, cognitoRegion);
    }
    async query(request) {
        const auth = await this.getAuthToken();
        const url = `${this.baseURL}/api/search/v2/query/`;
        const config = {
            headers: {
                Authorization: `Bearer ${auth.clientSecret}`,
                "Content-Type": "application/json",
                "data-partition-id": "osdu",
            },
        };
        const { data } = await axios_1.default.post(url, request, config);
        return data;
    }
    async queryWithCursor(request) {
        const token = await this.auth.getAuthToken();
        const url = `${this.baseURL}/api/search/v2/query_with_cursor`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "data-partition-id": "osdu",
            },
        };
        const { data } = await axios_1.default.post(url, request, config);
        return data;
    }
}
exports.SearchClient = SearchClient;
