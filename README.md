# 📗 README

This package contains a Typescript SDK for the Osdu Search API. It provides TypeScript interfaces generated from the OpenAPI spec, as well as a sample client for making API calls.

## 🛠️ Usage

Install dependencies:

```sh
npm install

```

Copy code

Import and use the SDK:

```typescript
import { Search } from "osdu-workbench";
import { basename } from "path";

const baseURL = "https://osdu.osdupsdemo.install.osdu.aws";

async function testWorkbench(baseURL) {
  const search = new Search.SearchClient(baseURL, "us-east-1");

  const query = await search.query({
    kind: "osdu:wks:master-data--Well:1.0.0",
  });

  console.log(query);
}

testWorkbench(baseURL);
```

## 📦 Structure

` /src/search/models.ts`` - Contains the TypeScript interfaces for requests/responses
 `index.ts`- Exports the SDK contents
`base/base.client.ts`- instantiates a base class for all other client modules. This gathers environmental variables`SearchClient` - Sample client for calling API

## ✨ Features

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

```
