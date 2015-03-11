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
    'RiftSketch': 'js/index',
    leap: 'lib/leap-0.6.3',
    oauth: 'bower_components/oauth-js/dist/oauth',
    lodash: 'bower_components/lodash/dist/lodash',
    mousetrap: 'lib/mousetrap',
    Three: 'lib/ThreeJS/Three',
    VRControls: 'lib/VRControls',
    VREffect: 'lib/VREffect',
    RiftSandbox: 'js/RiftSandbox',
    TextArea: 'js/TextArea',
    File: 'js/File',
    Sketch: 'js/Sketch',
    'angularMocks': '/base/bower_components/angular-mocks/angular-mocks',
    'angular': '/base/bower_components/angular/angular'
  },

  shim: {
    'angular': { exports: 'angular' },
    'angularMocks': { deps: ['angular'] },
    leap: {exports: 'Leap'},
    oauth: {exports: 'OAuth'},
    Three: {exports: 'THREE'},
    VRControls: {deps: ['Three']},
    VREffect: {deps: ['Three']}
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
