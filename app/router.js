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
                    templateUrl: "templates/login.tpl",
                    controller: 'login_Controller',
                })
                .state('upload', {
                    url: "/upload",
                    templateUrl: "templates/upload.tpl",
                    controller: 'upload_Controller',
                })
                .state('administration', {
                    url: "/administration",
                    templateUrl: "templates/administration_page.tpl",
                    controller: 'administration_Controller',
                })
                .state('player', {
                    url: "/player",
                    templateUrl: "templates/player.tpl",
                    controller: 'playerController',
                })
                .state('settings', {
                    url: "/settings",
                    templateUrl: "templates/settings.tpl",
                    controller: 'settings_Controller',
                })
                .state('register', {
                    url: "/register",
                    templateUrl: "templates/register.tpl",
                    controller: 'register_Controller',
                });
        });
})();
