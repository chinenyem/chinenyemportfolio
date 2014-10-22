'use strict';

describe('Service: orderTwo', function () {

  // load the service's module
  beforeEach(module('talkreserveApp'));

  // instantiate service
  var orderTwo;
  beforeEach(inject(function (_orderTwo_) {
    orderTwo = _orderTwo_;
  }));

  it('should do something', function () {
    expect(!!orderTwo).toBe(true);
  });

});
