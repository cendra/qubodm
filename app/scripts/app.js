'use strict';

/**
 * @ngdoc overview
 * @name qubodmApp
 * @description
 * # qubodmApp
 *
 * Main module of the application.
 */
angular
  .module('zafiro.mara', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
//    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'zafiro'
  ])
  .config(function () {
    /*$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });*/
  });
