import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": [
    "<rootDir>/setupJest.ts"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.spec.json",
      "stringifyContentPathRegex": "\\.html$"
    }
  }
};

export default config;
