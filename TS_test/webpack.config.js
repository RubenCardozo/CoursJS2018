var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool:"inline-source-map",
    entry:'.src/debut.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'debut.js'
    },
    module: {
        rules: [{
            test: /\.ts$/, 
            use: 'ts-loader',
            exclude:/node_module/ 
        }]
    },
    resolve:{
        extensions: [".tsx",".ts",".js"],
    },
    watch:true
};
