const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      async_hooks: false,
      os: require.resolve("os-browserify/browser"),
      buffer: require.resolve("buffer/"),
      querystring: require.resolve("querystring-es3/"),
      url: require.resolve("url/"),
      util: require.resolve("util/"),
      "crypto-browserify": require.resolve("crypto-browserify"), //if you want to use this module also don't forget npm i crypto-browserify
    },
  },
  mode: "development",
};
