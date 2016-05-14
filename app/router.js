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
                })
                .state('upload', {
                    url: "/upload",
                    templateUrl: "templates/upload.tpl",
                    //controller: 'fileController'
                })
                .state('administration', {
                    url: "/administration",
                    templateUrl: "templates/administration_page.tpl",
                    //controller: 'fileController'
                })
                .state('player', {
                    url: "/player",
                    templateUrl: "templates/player.tpl",
                    //controller: 'fileController'
                });
        });
})();
