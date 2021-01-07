'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const path = require('path');

console.log('test', path.join(__dirname, 'app', 'utils'));

module.exports = function(defaults) {

  let app = new EmberApp(defaults, {
    // Add options here
  });

  const { Webpack } = require('@embroider/webpack');

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
    packagerOptions: {
      webpackConfig: {
        resolve: {
          extensions: ['.js'],
          alias: {
            'utils': path.join(__dirname, 'app', 'utils')
          }
        }
      }
    }

  });
};