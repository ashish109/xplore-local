'use strict';

app.controller('homeController', ['$scope', '$rootScope', '$timeout','$state', function($scope, $rootScope, $timeout, $state) {
    console.log('home Controller');

    var $headImage = $('.homeBody');

    $scope.menuIconClicked = function (icon) {
        var toState = 'home.'+icon;
        $headImage.slideUp();
        $state.go(toState);
    };

    $scope.showHome = function () {
        $headImage.slideDown();
        $state.go('home');
    }


}]);
