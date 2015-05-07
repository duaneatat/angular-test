'use strict';

/* App Module */

var testApp = angular.module('testApp', [
  'ngRoute',
  'testControllers',
  'testServices'
]);

testApp.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }
]);
