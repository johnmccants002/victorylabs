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
      tls: require.resolve("tls"),
      net: require.resolve("net"),
      path: false,
      net: require.resolve("net-browserify"),
      assert: require.resolve("assert/"),
      zlib: require.resolve("browserify-zlib"),
      http: require.resolve("stream-http"),
      https: require.resolve("https"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      async_hooks: require.resolve("async-hooks"),

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
