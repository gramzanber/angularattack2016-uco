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
                .state('socialMedia', {
                    url: "/SocialMediaPrescence",
                    templateUrl: "templates/socialmedia.tpl",
                    controller: 'socialmediaController'
                })
                .state('popularAlbums', {
                    url: "/popularAlbums",
                    templateUrl: "templates/popularAlbums.tpl",
                    controller: 'popularAlbumsController',
                })
                .state('player', {
                    url: "/playlist",
                    templateUrl: "templates/player.tpl",
                    controller: 'playerController',
                })
                ;
        });
})();
