module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
          path: '.env',
        },
      ],
      [
        "module-resolver",
        {
          "root": [
            "./src"
          ],
          "extensions": [
            ".tsx",
            ".ts",
            ".js",
            ".json"
          ],
          "alias": {
            "@screens": "./src/screens",
            "@constants": "./src/constants",
            "@router": "./src/router",
            "@components": "./src/components",
            "@utils": "./src/utils",
            "@services": "./src/api"
          }
        }
      ]  
    ],
  };
};
