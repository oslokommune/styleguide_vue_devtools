const path = require('path');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.resolve.modules = [
    ...(defaultConfig.resolve.modules || []),
    path.resolve('./node_modules'),
  ];

  defaultConfig.module.rules.push({
    test: /\.sass$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          indentedSyntax: true
        }
      }
    ],
  });

  return defaultConfig;
};
