module.exports = {
    module: {
        rules: [
            { // 在webpack中使用babel需要babel-loader
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            { // 用于加载组件或者css中使用的图片
                test: /\.(jpg|jpeg|png|gif|cur|ico|svg)$/,
                use: [{
                    loader: 'file-loader', options: {
                        name: "images/[name][hash:8].[ext]"
                    }
                }]
            }
        ]
    }
}
