require.config({
  waitSeconds: 30,
  baseUrl: '',
  paths: {
    angular: 'lib/angular/angular',
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
    Sketch: 'js/Sketch'
  },
  shim: {
    angular: {exports: 'angular'},
    leap: {exports: 'Leap'},
    oauth: {exports: 'OAuth'},
    Three: {exports: 'THREE'},
    VRControls: {deps: ['Three']},
    VREffect: {deps: ['Three']}
  }
});
