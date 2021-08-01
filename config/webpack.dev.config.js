const theme = require("./theme");
const webpackBaseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const proxy = require("./proxy");

module.exports = merge(webpackBaseConfig, {
  mode: "development",

  devServer: {
    port: 3000,
    progress: true,
    hot: true,
    compress: true,
    proxy: proxy,
  },

  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        exclude: [/node_modules/],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]-[local]-[hash:5]",
              },
            },
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                modifyVars: theme,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(less|css)$/,
        exclude: [/src/],
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                modifyVars: theme,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
});
