module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePaterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']
}
