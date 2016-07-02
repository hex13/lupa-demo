module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /node_modules\/atom-lupa\/.*\.js$/, loader: "babel-loader" },
            { test: /\/lupa\/plugins\/.*\.js$/, loader: "babel-loader" },
            { test: /\.json$/, loader: "json-loader" },


        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
    node: {
        fs: "empty"
    },
    devtool:
'source-map'
};
