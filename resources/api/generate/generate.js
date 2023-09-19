/**
 * Merges OpenAPI spec files and generates an SDK.
 */

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { mergeSpecs } = require("./merge");
const { generateTsconfig } = require("./generate-tsconfig");
const jsiiDecorator = require("./jsii-decorator");
const YAML = require("js-yaml");

const cwd = process.cwd();

/**
 * Directory containing OpenAPI spec files.
 */
const specDir = path.join(cwd, "/api/spec");

/**
 * Output directory for merged spec and SDK.
 */
const outputDir = path.join(cwd, "/sdk");

/**
 * Merge OpenAPI spec files.
 */
const result = mergeSpecs(specDir);

/**
 * Write the merged OpenAPI spec to a file.
 */
fs.writeFileSync(path.join(outputDir, "merged.yaml"), YAML.dump(result.output));

/**
 * Directory to generate the SDK into.
 */
const sdkDir = path.join(outputDir, "generator-sdk-output");

/**
 * Generate SDK from merged OpenAPI spec using openapi-generator.
 * SDK is generated without validating the spec
 * Note that this may need to be adjusted after test
 * Also note that documentation is automatically generated.
 */
const cmd = `openapi-generator-cli generate -i ${outputDir}/merged.yaml -g typescript-axios -o ${sdkDir} --skip-validate-spec --additional-properties=generateMarkdownDoc=true`;

console.log(`Executing command: ${cmd}`);

exec(cmd, (err, stdout, stderr) => {
  console.log("STDOUT:", stdout);
  console.log("STDERR:", stderr);

  if (err) {
    console.error("Failed to generate SDK:", err);
    return;
  }

  console.log("Successfully generated SDK");
});

generateTsconfig(sdkDir);

exec("jsii", (err, stdout, stderr) => {
  console.log("STDOUT:", stdout);
  console.log("STDERR:", stderr);

  if (err) {
    console.error("Failed to generate SDK:", err);
    return;
  }

  console.log("Successfully generated SDK");
});
