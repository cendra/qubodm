'use strict';

/**
 * @ngdoc function
 * @name qubodmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the qubodmApp
 */
angular.module('qubodmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('AppCtrl', function($scope) {
  $scope.neighborhoods = ['Chelsea', 'Financial District', 'Midtown', 'West Village', 'Williamsburg'];
  $scope.neighborhoods2 = ['Chelsea', 'Financial District', 'Lower Manhattan', 'Midtown', 'Soho', 'Upper Manhattan', 'West Village', 'Williamsburg' ];
});
