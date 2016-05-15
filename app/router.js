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
                .state('search', {
                    url: "/",
                    templateUrl: "templates/search.tpl",
                    controller: 'search_Controller',
                })
                .state('player', {
                    url: "/upload",
                    templateUrl: "templates/player.tpl",
                    controller: 'playerController',
                })
                .state('socialmedia', {
                    url: "/SocialMediaPrescence",
                    templateUrl: "templates/socialmedia.tpl",
                    controller: 'socialmediaController'
                })
                ;
        });
})();
