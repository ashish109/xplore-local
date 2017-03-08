'use strict';

angular.module("sampleApp").directive('showStars', ["$rootScope", function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, elem, attr) {
        	var rating = (attr.showStars) ? attr.showStars : 0;
            $(elem).rateYo({
                rating: rating,
                readOnly: true
            });
        }
    }
}]);
