"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const models = require("./search.models");
const types = require("./search.types");
const search_client_1 = require("./search.client");
exports.Search = Object.assign(Object.assign(Object.assign({}, models), types), { SearchClient: search_client_1.SearchClient });
