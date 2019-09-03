const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoader = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: ['./assets/scss/custom.scss','./assets/vue/app.js'],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {

                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {

                            name: '[name].[ext]',

                            publicPath: '../../images',

                            emitFile: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [

        new MiniCssExtractPlugin({
            filename: 'css/custom.css'
        }),
        
        new VueLoader()
    ]
};