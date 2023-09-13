# 📗 README

This package contains a unified SDK for OSDU. This SDK is composed of synthesized OpenAPI spec files taken from OSDU microservices. The unified API is compiled into Typescript and then transcompiled using JSII using the `npm run sdkgen` command.

## 🛠️ Generate SDK

1. Navigate to the top level directory
2. Run `npm run sdkgen`
3. This will output the latest version of the SDK. Navigate to the SDK directory to review the documentation for the SDK itself.

The `generate.js` script will:

- 📂 Find all `.yaml` files in `/api/spec`
- 🔀 Merge them into a single spec output to `/sdk/merged.yaml`
- 🏭 Generate a TypeScript SDK to `/sdk`
- 🪄 Translate the existing SDK from Typescript to additional languages using JSII

To use:

- 💾 Install dependencies with `npm install`
- ⏩ Run the script with `npm run sdkgen`

## 💽 Dependencies

- [openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli) - to generate the SDK
- [axios](https://github.com/axios/axios) - the HTTP client used in the generated SDK

## ⚙️ Configuration

The script uses the current working directory to resolve the:

- 📁 Spec input folder
- 📁 SDK output folder

## 👨‍💻 Scripts

- `sdkgen` - Runs the `generate.js` script to generate the SDK

## 🤖 Output

Running the script will generate a TypeScript SDK using [axios](https://github.com/axios/axios) in the `/sdk` folder.

## ✨ Contributing

Contributions to improve the script and README are welcome!
