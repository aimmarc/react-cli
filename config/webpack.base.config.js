const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry:
        process.env.NODE_ENV === 'development'
            ? {
                  app: ['./src/index.tsx'],
                  hot: 'webpack/hot/dev-server.js',
                  client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
              }
            : {
                  app: ['./src/index.tsx'],
              },

    output: {
        publicPath: '/',
        filename: 'js/[name].bundle.[hash:8].js',
        path: path.resolve(__dirname, '../dist'),
    },

    target: ['web', 'es5'],

    stats: 'errors-only',

    performance: {
        hints: false,
    },

    module: {
        rules: [
            {
                test: /\.(jsx|tsx|js|ts)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({
                                before: [
                                    tsImportPluginFactory({
                                        libraryDirectory: 'es',
                                        libraryName: 'antd',
                                        style: true,
                                    }),
                                ],
                            }),
                            compilerOptions: {
                                module: 'es2015',
                            },
                        },
                    },
                ],
                exclude: [/node_modules/],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },

    ignoreWarnings: [],

    plugins: [
        new HtmlWebpackPlugin({
            // title: "Development",
            filename: 'index.html',
            template: './src/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new friendlyErrorsWebpackPlugin(),
        new ProgressBarPlugin(),
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@utils': path.resolve(__dirname, '../src/utils'),
            '@services': path.resolve(__dirname, '../src/services'),
        },
    },
};
