/**
 *ROUTE CONFIGURATIONS    
 */

'use strict';

angular.module("sampleApp").config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/templates/login.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'app/templates/home.html'
        })

    $urlRouterProvider.otherwise('/login');

}]);
