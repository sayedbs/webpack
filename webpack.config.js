const path = require("path");

module.exports = {
    entry: ["./src/test.js", "./src/index.js"],
    output: {
          filename: 'bundle.min.js',
          path: path.resolve(__dirname, "dist")
    }
}