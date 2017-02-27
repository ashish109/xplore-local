'use strict';

app.service('loginService', ['$http','$q','URL', function ($http, $q, URL){
	
	this.getOtp = function (param) {
		var param = param;
		var defer = $q.defer();

		var request = {
			url : URL.baseUrl+'getOtp/',
			method : 'POST',
			contentType:"application/json; charset=UTF-8",
			data : param
		};

		defer.notify('loading');

		$http(request).then(function (res){
			
			defer.resolve(res);

		},function (err) {

			defer.reject(err);
		});

		return defer.promise;
	}

	this.submitOtp = function (param) {
		var param = param;
		var defer = $q.defer();

		var request = {
			url : URL.baseUrl+'submitOtp/',
			method : 'POST',
			contentType:"application/json; charset=UTF-8",
			data : param
		};

		defer.notify('loading');

		$http(request).then(function (res){
			
			defer.resolve(res);

		},function (err) {

			defer.reject(err);
		});

		return defer.promise;
	}

}])