const fs = require("fs");

function generateTsconfig(outputPath) {
  const tsconfig = {
    compilerOptions: {
      target: "es2017",
      module: "commonjs",
    },
  };

  const tsconfigPath = `${outputPath}/tsconfig.json`;

  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig));

  console.log("Generated tsconfig.json");
}

module.exports = {
  generateTsconfig,
};
