const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    context: './src',
                    from: '*.html',
                    to: '.'
                }
            ]
        })
    ]
}