const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    entry: path.join(__dirname, '../index.web.js'),
    resolve: {
        modules: ['node_modules'],
        extensions: ['.web.js', '.js', '.jsx'],
        alias: {
            'react-native': 'react-native-web'
        }
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'react-hot-loader/webpack'
            }, {
                loader: 'babel-loader',
                options: {
                    plugins: ['lodash'],
                    presets: ['react-app'],
                    cacheDirectory: '.babel-cache'
                }
            }]
        }, {
            // Most react-native libraries include uncompiled ES6 JS.
            test: /\.js$/,
            include: [
                /node_modules\/react-native-/,
                /node_modules\/@indec\/react-native-/,
                /node_modules\/react-router-native/
            ],
            loader: 'babel-loader',
            query: {
                presets: ['react-app'],
                cacheDirectory: '.babel-cache'
            }
        }, {
            test: /\.css$/,
            include: /node_modules/,
            loaders: ['style-loader', 'css-loader'],
        }, {
            test: /\.(gif|jpe?g|png|svg)$/,
            loader: 'url-loader',
            query: {name: '[name].[hash:16].[ext]'}
        }, {
            test: /\.ttf$/,
            loader: 'url-loader',
            include: path.resolve(__dirname, '../node_modules/react-native-vector-icons')
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
