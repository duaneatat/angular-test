'use strict';

/* Directives */
var testDirectives = angular.module('testDirectives', []);
testDirectives.directive('dashboardChart', function() {
	// Get the column names from the first data point (will not work
	// if all columns for the chart aren't defined on that point)
	function getColumnNames(data, x) {
		return R.filter(R.compose(R.not, R.eq(x)), R.keys(data[0]));
	}
	function getColumns(data) {
		var columns = [];
		R.forEach(function(columnName) {
			columns.push({
				name: columnName,
				values: R.pluck(columnName, data)
			});
		}, getColumnNames(data, 'timestamp')); // Assumes the first data point has all of the columns.
		return columns;
	}

  return {
		restrict: 'E',
		replace: true,
		scope: {
			chart: '='
		},
		templateUrl: 'partials/chart.html',
		controller: ['$scope', function($scope) {
    	var chart = $scope.chart;
    	$scope.xLabel = chart['x-label'];
    	$scope.yLabel = chart['y-label'];
    	$scope.name = chart['name'];
			$scope.columns = getColumns(chart.data);
			$scope.times = R.map(function(item) {
				return new Date(item['timestamp']);
			}, chart.data);
    }]
  };
});
