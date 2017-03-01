/**
 *RUN BLOCK 
 */

'use strict';

angular.module("sampleApp").run(["$rootScope", "$state", function($rootScope, $state) {

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        // save current path name to global variable to use in the application
        $rootScope.currentPath = toState.name;
    });


    // function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    // }

    // device APIs are available
    //
    function onDeviceReady() {
        $rootScope.device_id = device.uuid;
        // Add similar listeners for other events
    }

}]);
