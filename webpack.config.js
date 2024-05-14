module.exports = {
    // ...
    module: {
        rules: [
            // Loại bỏ source-map-loader
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!hast-util-raw)/, // Loại bỏ node_modules trừ hast-util-raw
                use: ['babel-loader'], // Hoặc các loader khác bạn sử dụng
            },
        ],
    },
    // ...
};
