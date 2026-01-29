const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
// Avoid package exports edge cases on some setups
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
