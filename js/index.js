define([
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

  return angular.module('angularSampleApp', [
    'angularSampleApp.controllers.SketchController',
    'Leap',
    'OAuth',
    'RiftSandbox',
    'File',
    'Sketch'
  ]);
});
