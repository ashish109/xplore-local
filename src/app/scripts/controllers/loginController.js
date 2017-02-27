// LOGIN CONTROLLER

'use strict';

app.controller('loginController', ['$scope', 'URL', 'loginService', '$state', function($scope, URL, loginService, $state) {
    console.log('Login Controller');
    $scope.fetchedOtp = false;
    $scope.encodedNumber;
    $scope.resent = '';
    $scope.errMessage = '';

    // function called on click of requestOTP button
    $scope.requestOtp = function(mobileNumber, resendFlag) {
        var obj = { 'mobile': mobileNumber };
        $scope.otp = '';
        $scope.errMessage = '';
        loginService.getOtp(obj).then(function(res) {
            if (res.data) {
                $scope.fetchedOtp = true;
                mobileNumber = mobileNumber.replace(mobileNumber.charAt(5), 'X').replace(mobileNumber.charAt(6), 'X').replace(mobileNumber.charAt(7), 'X');
                $scope.encodedNumber = mobileNumber;
                $scope.resent = (resendFlag) ? 're-' : '';
            }
        }, function(err) {
            console.log('err', err);

        }).finally(function() {
            console.log('finally');

        });
    }

    var validateOtp = function(otp) {
        if ((isNaN(otp)) || otp.length < 4) {
            $scope.errMessage = 'invalid OTP';
            return true;
        }
    };

    // function when user submits the otp
    $scope.submitOtp = function(otp) {
        if (validateOtp(otp)) {
        	return false;
        } else {
            var otp = { otp: otp };
            $scope.errMessage = '';
            loginService.submitOtp(otp).then(function(res) {
                if (res.data) {
                	$state.go('home');
                	$scope.errMessage = '';
                } else {
                	$scope.errMessage = 'Oops! OTP did not match.';
                }
            }, function(err) {

            }).finally(function() {

            });
        }

    }

}]);
