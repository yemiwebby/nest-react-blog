const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './public/index.tsx',
    watch: true,
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                        },
                        "sass-loader"
                    ]
                })
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: "./views/index.hbs"
        // }),
        new ExtractTextPlugin("style.css")
    ],
    resolve: {
        extensions: [".js", ".tsx"]
    }
}