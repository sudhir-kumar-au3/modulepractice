const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const pkg = require("./package.json");
const path = require("path");
const libraryName = pkg.name;
module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index.js",
    chunkFilename: "[name].js",
    library: libraryName,
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
      chunkFilename: "[id].min.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              fallback: "file-loader",
              name: "[name][md5:hash].[ext]",
              outputPath: "assets/",
              publicPath: "/assets/",
            },
          },
        ],
      },
      {
        test: /\.*css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(pdf|doc|zip)$/,
        use: ["file-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      assets: path.resolve(__dirname, "assets"),
      // "@material-ui/core": path.resolve(
      //   __dirname,
      //   "./node_modules/@material-ui/core"
      // ),
      // "@material-ui/icons": path.resolve(
      //   __dirname,
      //   "./node_modules/@material-ui/icons"
      // ),
      // "@material-ui/styles": path.resolve(
      //   __dirname,
      //   "./node_modules/@material-ui/styles"
      // ),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
    // "@material-ui/icons": {
    //   root: "MaterialUI",
    //   commonjs2: "material-ui",
    //   commonjs: "material-ui",
    //   amd: "MaterialUI",
    //   umd: "MaterialUI",
    // },
    // "@material-ui/core": {
    //   root: "MaterialUI",
    //   commonjs2: "material-ui",
    //   commonjs: "material-ui",
    //   amd: "MaterialUI",
    //   umd: "MaterialUI",
    // },
    // "@material-ui/styles": {
    //   root: "MaterialUI",
    //   commonjs2: "material-ui",
    //   commonjs: "material-ui",
    //   amd: "MaterialUI",
    //   umd: "MaterialUI",
    // },
  },
};
