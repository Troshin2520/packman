const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ENV = process.env.STAGE || 'production';
const IsDev = ENV === 'DEV';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            'react',
                            'es2015',
                            'stage-0'
                        ]
                    }
                }
            },
            /*{
                test: /(\.less|\.css$)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['style-loader', 'css-loader', 'less-loader',  'postcss-loader']
                })
            },*/
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader:  'postcss-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
        ]
    },
    /*plugins: [
        new ExtractTextPlugin('./styles/bundle.css')
    ]*/
};
