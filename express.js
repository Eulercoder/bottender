const semver = require('semver');

if (process && semver.gt(process.version, '7.6.0')) {
  module.exports = require('./lib/express');
} else {
  module.exports = require('./lib-node6/express');
}
