/* eslint-disable max-len */
module.exports = {
  setupFiles: ["<rootDir>__tests__/setup/setupEnzyme.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/setup/"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/pages/app/App.js",
    "!src/pages/routes/routes.js",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
  },
}
