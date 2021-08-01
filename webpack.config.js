const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const tsImportPluginFactory = require("ts-import-plugin");
const mode =
  process.env.NODE_ENV === "development" ? "development" : "production";
const target = mode === "development" ? "web" : "browserslist";
const theme = require("./config/theme");

function plugins() {
  return mode === "production"
    ? [
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash:7].css",
          chunkFilename: "[name].[contenthash:7].css",
        }),
      ]
    : [];
}

function optimization() {
  return mode === "production"
    ? {
        usedExports: true,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            libs: {
              name: "chunk-libs",
              test: /[\\/]node_modules[\\/]/,
              chunks: "initial",
              priority: -10,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
            antd: {
              name: "chunk-antd", // split elementUI into a single package
              priority: 2, // the weight needs to be larger than libs and app or it will be packaged into libs or app
              test: /[\\/]node_modules[\\/]antd[\\/]/, // in order to adapt to cnpm
              reuseExistingChunk: true,
            },
          },
        },
        minimizer: [
          new UglifyJsPlugin(),
          new OptimizeCssAssetsWebpackPlugin({}),
        ],
      }
    : {};
}

module.exports = {
  mode,
  target: target,
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.[hash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3000,
    progress: true,
    hot: true,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8000", //这个是被替换的目标地址
        secure: true, //接受对方是https的接口
        changeOrigin: true, // 是否需要跨域
        // pathRewrite: { "^/api": "" },
      },
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|mjs|jsx)$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         [
      //           "@babel/preset-env",
      //           {
      //             corejs: "3",
      //             useBuiltIns: "usage",
      //           },
      //         ],
      //       ],
      //       plugins: ["@babel/plugin-transform-runtime"],
      //     },
      //   },
      //   exclude: /(node_modules|bower_components)/,
      // },
      {
        test: /\.(jsx|tsx|js|ts)$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryDirectory: "es",
                    libraryName: "antd",
                    style: true,
                  }),
                ],
              }),
              compilerOptions: {
                module: "es2015",
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(less|css)$/,
        exclude: [/node_modules/],
        use: [
          mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
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
          mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
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
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]",
        },
        // exclude: [resolve("src/icons")],
      },
    ],
  },
  plugins: [
    ...plugins(),
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
  optimization: optimization(),
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
};
