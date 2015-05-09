'use strict';

/* Services */

var testServices = angular.module('testServices', ['ngResource']);

testServices.factory('chartService', ['$resource', function($resource) {
	var ChartResource = $resource('/app/charts/charts.json');
	return {
		getCharts: function() {
			return ChartResource.query().$promise;
		}
	};
}]);
