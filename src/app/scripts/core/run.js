/**
 *RUN BLOCK 
 */

'use strict';

angular.module("sampleApp").run(["$rootScope", "$state", function($rootScope, $state) {

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        // save current path name to global variable to use in the application
        $rootScope.currentPath = toState.name;
    });


}]);
