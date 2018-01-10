/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  //CSS
  app.import('vendor/css/style.css');
  app.import('vendor/css/font-awesome.css');
  app.import('vendor/css/github-calendar.css');
  app.import('vendor/css/bootstrap-theme.css');
  app.import('vendor/css/github-activity.css');

  //JS
  app.import('vendor/javascript/main.js');
  app.import('vendor/javascript/bootstrap.js');
  app.import('vendor/javascript/jquery.rss.min.js');

  return app.toTree();
};
