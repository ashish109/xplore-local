// LOGIN CONTROLLER

'use strict';

app.controller('loginController', ['$scope', 'URL', 'loginService', '$state', '$rootScope', '$timeout', function($scope, URL, loginService, $state, $rootScope, $timeout) {
    console.log('Login Controller');
    $scope.fetchedOtp = false;
    $scope.encodedNumber;
    $scope.resent = '';
    $scope.errMessage = '';
    var UUID;
    // var UUID = "55551";

    var validateDevice = function(flag) {
        UUID = (flag) ? device.uuid : "'00000'";
        var obj = { uuid: "'"+UUID+"'" };
        console.log('obj', obj);
        loginService.validateId(obj).then(function(res) {
            console.log('res', res);
            if (res.data.length) {
                $state.go('home');
            } else {
                $state.go('login');
            }
        }, function(err) {
            $state.go('login');

        }).finally(function() {

        });
    };

    var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    if (app) {
        // PhoneGap application
        console.log('PHONE');
        $timeout(function() {
            validateDevice(true);
        }, 2000);
    } else {
        // Web page'
        console.log('WEB APP');
        validateDevice(false);
    }



    // validateDevice();

    // // check if the mobile number is registered
    // $scope.validateMobile = function(mobileNumber) {
    //     console.log('device.uuid', device);
    //     var uuid = (UUID) ? UUID : 'web';
    // }

    // function called on click of requestOTP button
    $scope.requestOtp = function(mobileNumber, resendFlag) {
        $scope.mobileNumber = angular.copy(mobileNumber);
        var obj = { 'mobile': mobileNumber };
        $scope.otp = '';
        $scope.errMessage = '';
        loginService.getOtp(obj).then(function(res) {
            console.log('res', res);
            if (res.data.Status == 'Success') {
                $scope.otpSessionId = res.data.Details;
                $scope.fetchedOtp = true;
                mobileNumber = mobileNumber.replace(mobileNumber.charAt(5), 'X').replace(mobileNumber.charAt(6), 'X').replace(mobileNumber.charAt(7), 'X');
                $scope.encodedNumber = mobileNumber;
                $scope.resent = (resendFlag) ? 're-' : '';
            } else {
                $scope.fetchedOtp = false;

            }
        }, function(err) {
            console.log('err', err);
            $scope.fetchedOtp = false;


        }).finally(function() {
            console.log('finally');

        });
    }

    var addNewUser = function() {
        var obj = { mob: $scope.mobileNumber, deviceId: UUID };
        loginService.addUser(obj).then(function(res) {

        }, function(err) {

        }).finally(function() {

        });
    }

    var validateOtp = function(otp) {
        if ((isNaN(otp)) || otp.length < 2) {
            $scope.errMessage = 'invalid OTP';
            return true;
        }
    };

    // function when user submits the otp
    $scope.submitOtp = function(otp) {
        if (validateOtp(otp)) {
            return false;
        } else {
            var otp = { otp: otp, otpSessionId: $scope.otpSessionId };
            $scope.errMessage = '';
            loginService.submitOtp(otp).then(function(res) {
                if (res.data.Status == "Success") {
                    addNewUser();
                    $state.go('home');
                    $scope.errMessage = '';
                } else if (res.data.Status == "Error") {
                    $scope.errMessage = res.data.Details;
                } else {
                    $scope.errMessage = 'oops!try again.'
                }
            }, function(err) {
                $scope.errMessage = 'oops!try again.'
            }).finally(function() {

            });
        }

    }

}]);
