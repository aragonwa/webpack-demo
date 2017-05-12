// webpack --config webpack-production.config.js -p
var WebpackStrip = require('strip-loader');
// Copy devConfig
var devConfig = require("./webpack.config.js");

// Strip loader
var stripLoader = {
    test:[/\.js$/, /\.es6$/],
    loader: WebpackStrip.loader('console.log', 'perfLog')
}

// Add to devConfig
devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;