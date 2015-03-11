require([
  'angular',
  'leap',
  'oauth',
  'lodash',
  'mousetrap',

  'RiftSandbox',
  'File',
  'Sketch',
  'js/SketchController'
],
function (
  angular,
  Leap,
  OAuth,
  _,
  Mousetrap,

  RiftSandbox,
  File,
  Sketch
) {
  'use strict';

  return angular.module('index', [
    'index.controllers.SketchController',
    'Leap',
    'OAuth',
    'RiftSandbox',
    'File',
    'Sketch'
  ]);
});
