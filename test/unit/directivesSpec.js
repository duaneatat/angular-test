'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
	beforeEach(module('testApp'));
  beforeEach(module('testDirectives'));
  var chartData = {
    "id": 1,
    "name": "Flows by Hour",
    "x-label": "Time",
    "y-label": "Flow Count",
    "order": 2,
    "data": [
      {"count":2053689,"timestamp":"2015-05-06T20:00:00.000Z"},{"count":10458826,"timestamp":"2015-05-06T21:00:00.000Z"}
    ]
  };
  var elm, scope, compiled;

  beforeEach(inject(function($rootScope, $compile) {
  	scope = $rootScope;
  	scope.chart = chartData;
  	elm = angular.element('<div><dashboard-chart chart="chart"></dashboard-chart></div>');
  	compiled = $compile(elm)(scope);
  	scope.$digest();
  }));

  describe('dashboardDirective', function(){
	  it('should display a name', function() {
	    var name = elm[0].querySelector('.chart-name');

	    expect(name.innerText).toBe('Flows by Hour');
	  });
	});
});
