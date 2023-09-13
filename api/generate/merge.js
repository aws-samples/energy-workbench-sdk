// merge-specs.js

const fs = require("fs");
const path = require("path");
const YAML = require("js-yaml");
const { merge } = require("openapi-merge");

function mergeSpecs(specDir) {
  // Get all YAML/JSON files in directory
  const files = fs.readdirSync(specDir).filter((file) => {
    return path.extname(file) === ".yaml" || path.extname(file) === ".json";
  });

  // Load spec files
  const specs = files.map((file) => {
    const filePath = path.join(specDir, file);
    const spec = fs.readFileSync(filePath, "utf8");

    if (path.extname(file) === ".yaml") {
      return {
        oas: YAML.load(spec),
      };
    } else {
      return {
        oas: JSON.parse(spec),
      };
    }
  });

  // Merge specs
  const result = merge(specs);

  // Return merged spec
  return result;
}

module.exports = {
  mergeSpecs,
};
