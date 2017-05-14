module.exports = {
    entry: [
        './app/client.js'
    ],
    output: {
        path: __dirname + "/public",
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
