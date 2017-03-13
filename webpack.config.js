const path = require('path');

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.js$/, use: "source-map-loader", enforce: "pre" },
            { test: /\.tsx?$/, use: "awesome-typescript-loader" }
        ]
    }
};