const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('build'),
        filename: "bundle.js",
        publicPath: '/build/'
    },
    devtool: "source-map",
    module: {
        rules:
        [
            {
                test: /\.html$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /(.svg|.eot|.png)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            },
            {
                test: /(.ttf|.woff|.woff2)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ]
}