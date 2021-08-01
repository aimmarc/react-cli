const path = require("path");
const tsImportPluginFactory = require("ts-import-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/index.js"],
  },

  output: {
    filename: "js/[name].bundle.[hash:8].js",
    path: path.resolve(__dirname, "../dist"),
  },

  module: {
    rules: [
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
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@services": path.resolve(__dirname, "../src/services"),
    },
  },
};