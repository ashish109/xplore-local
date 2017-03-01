'use strict';

app.service('loginService', ['$http', '$q', 'URL', 'OTP_URL', function($http, $q, URL, OTP_URL) {

    this.getOtp = function(param) {
        var param = param;
        var defer = $q.defer();

        var request = {
            url: OTP_URL.baseUrl + 'SMS/' + param.mobile + '/AUTOGEN',
            method: 'GET'
        };

        defer.notify('loading');

        $http(request).then(function(res) {

            defer.resolve(res);

        }, function(err) {

            defer.reject(err);
        });

        return defer.promise;
    }

    this.submitOtp = function(param) {
        var param = param;
        var defer = $q.defer();

        var request = {
            url: OTP_URL.baseUrl + 'SMS/VERIFY/'+param.otpSessionId+"/"+param.otp,
            method: 'GET'
        };

        defer.notify('loading');

        $http(request).then(function(res) {

            defer.resolve(res);

        }, function(err) {

            defer.reject(err);
        });

        return defer.promise;
    };

    this.addUser = function(param) {
        var param = param;
        var defer = $q.defer();

        var request = {
            url: URL.baseUrl + 'addUser/',
            method: 'POST',
            contentType: "application/json; charset=UTF-8",
            data: param
        };

        defer.notify('loading');

        $http(request).then(function(res) {

            defer.resolve(res);

        }, function(err) {

            defer.reject(err);
        });

        return defer.promise;
    }

    this.validateId = function(param) {
        var param = param;
        var defer = $q.defer();

        var request = {
            url: URL.baseUrl + 'validateUuid/',
            method: 'POST',
            contentType: "application/json; charset=UTF-8",
            data: param
        };

        defer.notify('loading');

        $http(request).then(function(res) {

            defer.resolve(res);

        }, function(err) {

            defer.reject(err);
        });

        return defer.promise;
    }

}])
