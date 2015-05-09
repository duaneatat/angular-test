'use strict';

/* App Module */

var testApp = angular.module('testApp', [
  'gridshore.c3js.chart',
  'ngRoute',
  'testControllers',
  'testServices',
  'testDirectives'
]);

testApp.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardCtrl',
        resolve: {
          charts: function(chartService) {
            return chartService.getCharts();
          }
        }
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }
]);
