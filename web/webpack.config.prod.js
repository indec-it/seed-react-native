const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
    mode: process.env.NODE_ENV,
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
            loader: 'babel-loader', options: {
                plugins: ['lodash'],
                presets: ['react-app']
            }
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
                presets: ['react-app']
            }
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
        }),
        new LodashModuleReplacementPlugin
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
