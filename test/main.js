var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: {
    'angularSampleApp': '/base/app/scripts/app',
    'angularMocks': '/base/bower_components/angular-mocks/angular-mocks',
    'angular-animate': '/base/bower_components/angular-animate/angular-animate',
    'angular-cookies': '/base/bower_components/angular-cookies/angular-cookies',
    'angular-resource': '/base/bower_components/angular-resource/angular-resource',
    'angular-route': '/base/bower_components/angular-route/angular-route',
    'angular-sanitize': '/base/bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '/base/bower_components/angular-touch/angular-touch',
    'angular': '/base/bower_components/angular/angular'
  },

  shim: {
    'angular': { exports: 'angular' },
    'angularMocks': { deps: ['angular'] },
    'angular-animate': { deps: ['angular'] },
    'angular-resource': { deps: ['angular'] },
    'angular-route': { deps: ['angular'] },
    'angular-sanitize': { deps: ['angular'] },
    'angular-touch': { deps: ['angular'] },
    'angular-cookies': { deps: ['angular'] }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
