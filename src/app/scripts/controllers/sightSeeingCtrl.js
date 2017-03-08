'use strict';

app.controller('sightSeeingController', ['$scope', '$rootScope', '$timeout', '$state', 'menuService', 'googleAPI', function($scope, $rootScope, $timeout, $state, menuService, googleAPI) {

    $scope.sightseeingObject = {};


    $scope.showSightseeingContent = function() {
        menuService.sightseeingMaps().then(function(res) {
            console.log('res', res);
            $scope.sightseeingObject = angular.copy(res.data.results);
            $scope.sightseeingObject.forEach(function(data) {
                if (data.photos && data.photos.length) {
                    data['imageUrl'] = googleAPI.imageUrl + data.photos[0].photo_reference + '&sensor=false&maxheight=150&maxwidth=500&key=' + googleAPI.key;
                } else {
                    data['imageUrl'] = 'app/images/black.png';
                }
            })

        }, function(err) {

        }).finally(function() {
            console.log($scope.sightseeingObject);
        });
    }

    $scope.showSightseeingContent();

}]);
