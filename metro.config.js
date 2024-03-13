const { getDefaultConfig } = require("expo/metro-config");
const { mergeConfig } = require("metro-config");
const path = require("path");

module.exports = (async () => {
  const expoConfig = await getDefaultConfig(__dirname);
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);

  return mergeConfig(expoConfig, {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  });
})();
