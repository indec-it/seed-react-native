/* eslint global-require: "off" */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod.web');
} else {
    module.exports = require('./Root.dev.web');
}
