module.exports = {
  setupFiles: ["<rootDir>__tests__/setup/setupEnzyme.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/setup/"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/containers/App.js",
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
