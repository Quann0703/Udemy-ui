import {} from 'stylis-plugin-rtl';
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!hast-util-raw)/,
                use: ['babel-loader'],
            },
        ],
    },
    ignoreWarnings: [/Failed to parse source map/],
};
