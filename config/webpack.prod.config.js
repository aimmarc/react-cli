const theme = require("./theme");
const webpackBaseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

const lessLoader = {
  loader: "less-loader",
  options: {
    lessOptions: {
      // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
      modifyVars: theme,
      javascriptEnabled: true,
    },
  },
};

module.exports = merge(webpackBaseConfig, {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        exclude: [/node_modules/],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]-[local]-[hash:5]",
              },
            },
          },
          "postcss-loader",
          lessLoader,
        ],
      },
      {
        test: /\.(less|css)$/,
        exclude: [/src/],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          lessLoader,
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: "css/[name].[contenthash:7].css",
      chunkFilename: "css/[name].[contenthash:7].css"
    }),
  ],

  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          minChunks: 1,
          minSize: 0,
          priority: -20,
        },
        default: {
          minChunks: 1,
          priority: -10,
          minSize: 0,
          reuseExistingChunk: true,
        },
        antd: {
          name: "chunk-antd", // split elementUI into a single package
          minChunks: 1,
          minSize: 0,
          priority: 2, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]antd[\\/]/, // in order to adapt to cnpm
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCssAssetsWebpackPlugin({})
    ],
  },
});
