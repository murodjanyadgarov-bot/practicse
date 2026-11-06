const path = require ('path')

module.exports = {
  mode: "development",
  entry: './practicse/practicse.js',
  output: {
   path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  watch: true,
  devtool: 'source-map',

  module: {}
};
