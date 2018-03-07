const path = require('path');

module.exports = function(config) {
    let eslintLoader = config.module.rules[0];
    eslintLoader.use[0].options.useEslintrc = true;
    let loaderList = config.module.rules[1].oneOf;
    loaderList.splice(loaderList.length - 1, 0, {
        test: /\.(less|css)$/,
       use: [
           require.resolve('style-loader'),
           {
               loader: require.resolve('css-loader'),
               options: {
                   importLoaders: 2
               }
           },
           {
               loader: require.resolve('postcss-loader'),
               options: {
                   ident: 'postcss'
               }
           },
           {
               loader: require.resolve('less-loader'),
               options: {
                   strictMath: true
               }
           }
       ]
    });
}
