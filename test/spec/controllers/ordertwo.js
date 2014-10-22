'use strict';

describe('Controller: OrdertwoCtrl', function () {

  // load the controller's module
  beforeEach(module('talkreserveApp'));

  var OrdertwoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrdertwoCtrl = $controller('OrdertwoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
