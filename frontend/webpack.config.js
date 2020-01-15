var path = require('path')

module.exports = {
    mode: "development",
    watch: true,
    entry: path.join(__dirname, './index.jsx'),
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}