module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // For TypeScript files
    "^.+\\.(js|jsx)$": "babel-jest", // For JavaScript and JSX files
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/src/__mocks__/styleMock.ts",
  },
};

export {};
