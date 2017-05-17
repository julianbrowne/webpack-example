
var webpack = require('webpack');
var path = require("path");

var CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var sourceDirectory = path.join(__dirname, 'src');
var targetDirectory = path.join(__dirname, 'dist');

module.exports = [ 
    { 
        entry: { 
            main: path.join(sourceDirectory, "indexTest.js")
        },
        output: { 
            path: targetDirectory,
            filename: 'test.js'
        },
        module: { 
            loaders: [{ 
                test: /\.(html)$/,
                loader: "file-loader?name=[name].[ext]"
            }]
        },
        plugins: [ 
            new CleanWebpackPlugin([ 
                path.join(targetDirectory, "**/*")
            ]),
            new CopyWebpackPlugin([ 
                { context: sourceDirectory, from: "lib", to: path.join(targetDirectory, "lib") }
            ]),
        ]
    },
    { 
        entry: { 
            main: path.join(sourceDirectory, "indexProduction.js")
        },
        output: { 
            path: targetDirectory,
            filename: 'production.js'
        },
        module: { 
            loaders: [{ 
                test: /\.(html)$/,
                loader: "file-loader?name=[name].[ext]"
            }]
        },
        plugins: [ 
        ]
    }
];