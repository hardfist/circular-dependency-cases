module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.mjs'
  },
  output: {
    path: require('path').resolve(__dirname, 'dist'),
    filename: 'webpack.js'
  }
}