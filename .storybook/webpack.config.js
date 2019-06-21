const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./node_modules'),
  ];

  config.module.rules.push({
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

  return config;
};
