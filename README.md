# 📗 README

This package contains a Typescript SDK for the Osdu Search API. It provides TypeScript interfaces generated from the OpenAPI spec, as well as a sample client for making API calls.

## 🛠️ Usage

Install the package:
npm install osdu-search-sdk

Copy code

Import and use the SDK:

```typescript
import { OsduSearch, OsduSearchClient } from 'osdu-search-sdk';

const client = new OsduSearchClient();

const query: OsduSearch.QueryRequest = {
  kind: 'test',
  limit: 100
};

const result = await client.queryRecords(query);
See the API documentation for more details.

📦 Structure
/src/search/models.ts - Contains the TypeScript interfaces for requests/responses
index.ts - Exports the SDK contents
OsduSearchClient - Sample client for calling API
✨ Features
Type-safe interfaces for API contracts
Sample client with methods for API operations
Promise-based async/await API
JSDoc annotated
🤖 Development
To regenerate the SDK:

Copy code

npm run generate
This will re-build the TypeScript interfaces from the OpenAPI spec.

📚 Resources
OpenAPI Specification
REST API Docs
🙌 Contributing
Contributions are welcome! Please see the contribution guidelines.
```
