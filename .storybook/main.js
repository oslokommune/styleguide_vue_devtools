const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {

    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}
