require([
  'angular',
  'js/SampleController'
],
function (
  angular
) {
  'use strict';

  return angular.module('sampleApp', [
    'sampleApp.controllers.SampleController'
  ]);
});
