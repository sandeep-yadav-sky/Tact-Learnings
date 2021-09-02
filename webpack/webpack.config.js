const { Module } = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
    entry: './app/index.js',
    module:{
        rules:[
            {
                test: /\.svg$/,
                use: 'svg-inline-loader',
            },
            {
                test: /\.(css|scss)$/i,
                use: ["style-loader", "css-loader","sass-loader"],
            },
            {
                test: /\.(js)$/,
                exclude: '/(node modules)/',
                use: [{
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                }}]
            }
        ]
    },
    output:{
        path: path.resolve(__dirname, "dest"),
        filename: "bundle.js",
    },
    // plugins: [new HtmlWebpackPlugin()],
    mode: "development",
    devServer: {
        static: __dirname + '/dest',
        port: 4203,
        hot: true,
    }
}