(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/");
            //
            // Now set up the states
            $stateProvider
                .state('login', {
                    url: "/",
                    templateUrl: "templates/index.tpl",
                    //controller: 'fileController'
                });
        });
})();
