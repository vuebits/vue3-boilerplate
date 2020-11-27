module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/core/**/*.{vue,ts}',
    '<rootDir>/src/shared/**/*.{vue,ts}',
    '<rootDir>/src/routes/**/*.{vue,ts}',
    '<rootDir>/src/store/**/*.{vue,ts}'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  snapshotResolver: './jest.snapshot-resolver.js'
};
