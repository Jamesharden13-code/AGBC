const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    resolver: {
    // Empêche Metro de crash quand Gradle modifie des fichiers
    blockList: [/android\/.*/, /ios\/.*/],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
