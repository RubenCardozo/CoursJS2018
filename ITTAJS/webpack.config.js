var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool:"sourcemap",
    entry: [ path.resolve(__dirname, '../../ts-src/canvas.ts')],
    output: {
        path: path.resolve(__dirname, '../../build'),
        filename: 'canvas.js'
    },
    module: {
        loaders: [{
            test: /\.ts$/, 
            include:path.resolve(__dirname, "ts-src"),
            loader: 'ts-loader' 
        }]
    },
    resolve:{
        extensions: [".webpack.js",".web.js",".ts",".js"],
    },
    watch:true
};
