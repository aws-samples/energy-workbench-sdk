// openapi-converter.js

const swagger2openapi = require("swagger2openapi");

async function convertSwagger2ToOpenAPI3(swagger2Spec) {
  return new Promise((resolve, reject) => {
    swagger2openapi.convertObj(swagger2Spec, {}, (err, openapi3Spec) => {
      if (err) {
        reject(err);
      } else {
        resolve(openapi3Spec);
      }
    });
  });
}

module.exports = {
  convertSwagger2ToOpenAPI3,
};
