'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers.controller('DashboardCtrl', [
  '$scope', 'charts',
  function($scope, charts) {
    $scope.title = 'Dashboard';
    $scope.charts = charts;
  }
]);
