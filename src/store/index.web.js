/* eslint global-require: "off" */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod.web');
} else {
    module.exports = require('./configureStore.dev.web');
}
