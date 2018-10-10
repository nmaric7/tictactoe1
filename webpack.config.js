const path = require("path");
const webpack = require("webpack");

// Constant with our paths
const Paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js')
};

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const WriteFilePlugin   = require('write-file-webpack-plugin');

// REST API SERVER URL
const API_PATH = 'http://localhost:9000/api';
const API_FLASK_API = 'http://localhost:5000/tictactoe/api/v1.0'

// Webpack configuration
const devConfig = {
    mode: "development",
    devtool:"source-map",
    entry: path.join(Paths.JS, 'app.js'),
    output: {
        path: Paths.DIST,
        filename: 'app.bundle.js',
        publicPath: "/"
    },
    plugins: [
        //new webpack.DefinePlugin({API: API_PATH}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({template: path.join(Paths.SRC, 'index.html')}),
        new MiniCssExtractPlugin('css/app.bundle.css'),
        new CopyWebpackPlugin(([{from: 'src/images', to: 'images' }]))
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    "css-loader"
                ]

            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 80000,
                            name: 'fonts/[name].[ext]',
                            mimetype: "application/font-woff"
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    "css-loader"
                ]
            },
            {
                test: /\.[ot]tf$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 80000,
                            name: 'fonts/[name].[ext]',
                            mimetype: "application/octet-stream"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },

    externals:{
        API: JSON.stringify(API_PATH),
        API_FLASK: JSON.stringify(API_FLASK_API)
    },

    devServer: {
        port:9100,
        historyApiFallback: {
            index:'/'
        }
    }
};

//export configuration
module.exports = devConfig;