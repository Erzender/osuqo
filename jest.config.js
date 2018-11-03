module.exports = {
  preset: 'react-native',
  transform: {
    // This workaround (from https://github.com/facebook/react-native/issues/19859#issuecomment-407748189)
    // requires manually adding the jest-hoist plugin in .babelrc to hoist mocks above imports
    // (refs https://github.com/facebook/react-native/issues/20614)
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
};
