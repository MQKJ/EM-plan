var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry : {
        main: [
            './static/js/jSignature.min.js', './static/js/jsign.js'
        ]
    },
    output : {
        filename: 'public/main.js'
    },
    "module" : {
        "loaders" : [
            {
                "test": /\.jsx?/,
                "exclude": /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }               
            }
        ]
    }
}