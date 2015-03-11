define(['angular', 'angularMocks', 'angularSampleApp'], function (angular, mocks, riftSketch) {
  'use strict';

  describe('Controller: SketchCtrl', function () {

    // load the controller's module
    beforeEach(module('angularSampleApp.controllers.SketchController'));

    // Initialize the controller and a mock scope
    var scope;
    var SketchCtrl;

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SketchCtrl = $controller('SketchController', { $scope: scope });
    }));

    it('should exist...', inject(function ($controller) {
      expect(SketchCtrl).toBeDefined();
    }));

  });

});
