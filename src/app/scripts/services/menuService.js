'use strict';

app.service('menuService', ['$http', '$q', 'googleAPI', function($http, $q, googleAPI) {

	this.sightseeingMaps = function (param) {
		var param = param;
        var defer = $q.defer();
        // 
        var location = '12.937855,%2077.691381';
        // 

        var request = {
            url: googleAPI.mapsUrl + 'json?location=' + location + '&keyword=attractions&radius=5000&key='+googleAPI.key,
            method: 'GET'
        };

        defer.notify('loading');

        $http(request).then(function(res) {

        	// console.log('res1',res);

            defer.resolve(res);

        }, function(err) {

            defer.reject(err);
        });

        return defer.promise;
	}

	this.getImage = function (param) {
		var param = param;
        var defer = $q.defer();
        // 
        var location = '12.937855,%2077.691381';
        // 

        var request = {
            url: googleAPI.imageUrl + param + '&sensor=false&maxheight=300&maxwidth=500&key='+googleAPI.key,
            method: 'GET'
        };

	// https://maps.googleapis.com/maps/api/place/photo?photoreference=PHOTO_REFERENCE&sensor=false&maxheight=MAX_HEIGHT&maxwidth=MAX_WIDTH&key=YOUR_API_KEY


        defer.notify('loading');

        $http(request).then(function(res,a,b) {

            defer.resolve(res);

        }, function(err) {

            defer.reject(err);
        });

        return defer.promise;
	}

}]);