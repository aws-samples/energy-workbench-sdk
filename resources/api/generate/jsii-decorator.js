const tsMorph = require("ts-morph");
const jsiiConfig = require("jsii-config");
const { addJsiiDecorators } = require("jsii-config");

async function addJsii(sourceDir, targetDir) {
  // Step 1: Removed inspect, directly decorate files
  const project = new tsMorph.Project({
    tsConfigFilePath: `${sourceDir}/tsconfig.json`,
  });

  const sourceFiles = project.getSourceFiles();

  jsiiConfig(sourceFiles);

  // Step 2: Write decorated SDK to target
  const emitResult = project.emit({ emitOnlyDtsFiles: false });

  tsMorph.overwriteTsconfig(project);
  tsMorph.saveFiles(emitResult, { overwriteExisting: true });
}

module.exports = {
  addJsii,
};
