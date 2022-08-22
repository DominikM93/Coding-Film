const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.js",
    },
    plugins: [new HTMLWebpackPlugin({template: "./public/index.html"})],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".json"],
    },
    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
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
                test: /.png|svg|jpg|gif$/,
                use: ["file-loader"],
            },
        ],
    },
};
