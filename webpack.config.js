const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.js",
        publicPath: "/",
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./public/index.html"}),
        new Dotenv(),
    ],
    devtool: "source-map",
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".json"],
    },
    target: "web",
    devServer: {
        port: 3000,
        static: ["./public"],
        historyApiFallback: true,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
            progress: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "source-map-loader",
            },
        ],
    },
};
