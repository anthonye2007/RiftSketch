define(['angular', 'angularMocks', 'js/index'], function (angular, mocks, index) {
  'use strict';

  describe('Controller: SketchCtrl', function () {

    // load the controller's module
    beforeEach(module('index'));

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
