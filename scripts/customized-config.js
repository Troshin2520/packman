var rewire = require('rewire');

switch(process.argv[2]) {
    case 'start':
        rewireModule('react-scripts/scripts/start.js', loadCustomizer('../webpack.config'));
        break;
    case 'build':
        rewireModule('react-scripts/scripts/build.js', loadCustomizer('../webpack.config'));
        break;
    default:
        console.log('customized-config only supports "start", "build", and "test" options.');
        process.exit(-1);
}

function loadCustomizer(module) {
    try {
        return require(module);
    } catch(e) {
        if(e.code !== "MODULE_NOT_FOUND") {
            throw e;
        }
    }
    return config => config;
}

function rewireModule(modulePath, customizer) {
    let defaults = rewire(modulePath);
    let config = defaults.__get__('config');
    customizer(config);
}