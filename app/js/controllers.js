'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers.controller('DashboardCtrl', [
  '$scope',
  function($scope) {
    $scope.title = 'Dashboard';
  }
]);
