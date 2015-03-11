define(['angular', 'angularMocks', 'js/sample'], function (angular, mocks) {
  'use strict';

  describe('Controller: Sample', function () {

    // load the controller's module
    beforeEach(module('sampleApp.controllers.SampleController'));

    // Initialize the controller and a mock scope
    var scope;
    var SketchCtrl;

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SketchCtrl = $controller('SampleController', { $scope: scope });
    }));

    it('should exist...', inject(function ($controller) {
      expect(SketchCtrl).toBeDefined();
    }));

  });

});
