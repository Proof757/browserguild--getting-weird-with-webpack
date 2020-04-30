const path = require('path');

module.exports = {
    entry: './src/app.js', // can be an object | string | array
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    }
};