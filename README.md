# Energy Workbench SDK

This package contains a Typescript SDK for the OSDU API. The SDK includes a base client for authorization as well as several client modules for OSDU API operations. This AWS Sample application is in open preview.

## 📦 Structure

` /src/<endpoint>/models.ts`` - Contains the TypeScript interfaces for requests/responses
 `index.ts`- Exports the SDK contents
`base/base.client.ts`- instantiates a base class for all other client modules. This gathers environmental variables`GroupClient` - Sample client for calling API
