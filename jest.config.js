const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  // ...tsjPreset,
  // preset: "jest-expo",

  transform: {
    // ...tsjPreset.transform,
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/@unimodules/build/.+.js$"],
  globals: {
    "ts-jest": {
      // babelConfig: true
    }
  }
};
