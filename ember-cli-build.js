/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  //CSS
  app.import('vendor/css/style.css');
  app.import('vendor/css/swipebox.css');

  //JS
  app.import('vendor/javascript/bars.js');
  app.import('vendor/javascript/easyResponsiveTabs.js');
  app.import('vendor/javascript/jquery.swipebox.min.js');

  return app.toTree();
};
