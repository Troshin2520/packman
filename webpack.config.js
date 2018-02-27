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
                    loader: "babel-loader",
                    query: {
                        presets: [
                            'react',
                            'es2015',
                            'stage-0'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
        ]
    }
};
