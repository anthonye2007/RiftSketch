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
    'angularSampleApp': '/base/js/index',
    'leap': '/base/lib/leap-0.6.3',
    'oauth': '/base/bower_components/oauth-js/dist/oauth',
    'lodash': '/base/bower_components/lodash/dist/lodash',
    'mousetrap': '/base/lib/mousetrap',
    'Three': '/base/lib/ThreeJS/Three',
    'VRControls': '/base/lib/VRControls',
    'VREffect': '/base/lib/VREffect',
    'RiftSandbox': '/base/js/RiftSandbox',
    'TextArea': '/base/js/TextArea',
    'File': '/base/js/File',
    'Sketch': '/base/js/Sketch',
    'angularMocks': '/base/bower_components/angular-mocks/angular-mocks',
    'angular': '/base/lib/angular/angular'
  },

  shim: {
    'angular': { exports: 'angular' },
    'angularMocks': { deps: ['angular'] },
    'leap': {exports: 'Leap'},
    'oauth': {exports: 'OAuth'},
    'Three': {exports: 'THREE'},
    'VRControls': {deps: ['Three']},
    'VREffect': {deps: ['Three']}
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
