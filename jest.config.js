module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: false, // Default: true
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
