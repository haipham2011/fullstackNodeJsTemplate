var path = require('path')

module.exports = {
    mode: "development",
    watch: true,
    entry: path.join(__dirname, './index.jsx'),
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}