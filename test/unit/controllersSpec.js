'use strict';

/* jasmine specs for controllers go here */
describe('controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('testApp'));
  beforeEach(module('testServices'));

  describe('DashboardCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('DashboardCtrl', {$scope: scope, charts: [1,2]});
    }));


    it('should set the default title', function() {
      expect(scope.title).toBe('Dashboard');
    });
  });

});
