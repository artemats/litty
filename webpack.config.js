const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ['transform-class-properties'],
                        sourceMap: false
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                        ],
                                    ],
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: ["absolute/path/a", "absolute/path/b"],
                                    sourceMap: true
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader'
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg|jpg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: '../images/',
                            useRelativePath: true,
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '../fonts/',
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader?name=video/[name].[ext]',
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        port: 8000,
        historyApiFallback: true,
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/style.css',
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/html', 'index.html'),
            minify: {
                collapseWhitespace: false
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'page-not-found.html',
            template: path.resolve(__dirname, 'src/html', 'page-not-found.html'),
            minify: {
                collapseWhitespace: false
            },
        }),
    ],
    // mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true
                }
            })
        ],
    },
};