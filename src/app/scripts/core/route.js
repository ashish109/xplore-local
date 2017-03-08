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
        .state('home.street-food', {
            url: '/street-food',
            templateUrl: 'app/templates/partials/street-food.html'
        })
        .state('home.adventure', {
            url: '/adventure',
            templateUrl: 'app/templates/partials/adventure.html'
        })
        .state('home.sight-seeing', {
            url: '/sight-seeing',
            templateUrl: 'app/templates/partials/sight-seeing.html'
        })
        .state('home.games', {
            url: '/games',
            templateUrl: 'app/templates/partials/games.html'
        });

    $urlRouterProvider.otherwise('/home');

}]);
