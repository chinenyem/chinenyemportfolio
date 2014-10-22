'use strict';

describe('Controller: InventoryctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('talkreserveApp'));

  var InventoryctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InventoryctrlCtrl = $controller('InventoryctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
