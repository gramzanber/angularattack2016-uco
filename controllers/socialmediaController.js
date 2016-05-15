(function () {
    'use strict';
    angular
    .module('app')
    .controller('socialmediaController', function socialmediaController($scope, $rootScope, $http, $q, $state, $window, $sce) {

		if ($rootScope.artistId) $window.sessionStorage.id = $rootScope.artistId;
		if ($rootScope.artistName) $window.sessionStorage.name = $rootScope.artistName;
		var id = $rootScope.artistId = $window.sessionStorage.id; console.log(id);
		var name = $rootScope.artistName = $window.sessionStorage.name;
		$rootScope.alreadySearched = true;

		getSocial().then(
            function(data) {
                $scope.spotifyurl = data;
				console.log($scope.spotifyurl);
            }
		);

		getOnlinePrescence().then(
            function(response) {
				$scope.links = {};
				$scope.links.official = $sce.trustAsResourceUrl(response.data.official_url[0]);
					console.log(response.data.official_url[0]); //official
				$scope.links.lastfm = $sce.trustAsResourceUrl(response.data.lastfm_url[0]);
                    console.log(response.data.lastfm_url[0]); //lastfm
				$scope.links.facebook = $sce.trustAsResourceUrl("https://www.facebook.com/" + response.data.facebook_username);
                    console.log("https://www.facebook.com/" + response.data.facebook_username); //facebook
                $scope.links.vevo = $sce.trustAsResourceUrl(response.data.vevo_url[0]);
					console.log(response.data.vevo_url[0]); //vevo
                $scope.links.wiki = $sce.trustAsResourceUrl(response.data.wikipedia_url[0]);
					console.log(response.data.wikipedia_url[0]); //wiki
				$scope.links.twitter = $sce.trustAsResourceUrl(response.data.twitter_url[0]);
                    console.log(response.data.twitter_url[0]); //twitter
				$scope.links.spotify = $sce.trustAsResourceUrl(response.data.spotify_url[0]);
                    console.log(response.data.spotify_url[0]); //spotify
				$scope.links.youtube = $sce.trustAsResourceUrl(response.data.youtube_url[0]);
                    console.log(response.data.youtube_url[0]); //youtube
				$scope.links.instagram = $sce.trustAsResourceUrl(response.data.instagram_url[0]);
                    console.log(response.data.instagram_url[0]); //instagram
			}
        );
			
		getFacebookMetrics().then(
                function(response) {
					console.log(response.data.facebook.likes.data.value); //likes
                }
        );

        getVevoMetrics().then(
                function(response) {
					console.log(response.data.vevo.viewsTotal.data.value); //views
                }
        );

        getLastFmMetrics().then(
                function(response) {
					console.log(response.data.lastfm.playcount.data.value); //clicks
                }
        );

        getTwitterMetrics().then(
                function(response) {
					console.log(response.data.twitter.followers.data.value); //followers
                }
        );
		
		function getSocial() {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/artist/"+id+"/metrics?api_key=6d26fd60ee690f2cdf287654182c69f2").then(
                function handleSuccess(response) {
                    console.log('success');
                    deferred.resolve(response.data);
                },
                function handleError(response) {
                    console.log('failure');
                }
            );
            return deferred.promise;
        }
		
		function getFacebookMetrics() {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/artist/"+id+"/metrics/facebook?api_key=6d26fd60ee690f2cdf287654182c69f2").then(
                function handleSuccess(response) {
                    console.log('success');
                    deferred.resolve(response.data);
                },
                function handleError(response) {
                    console.log('failure');
                }
            );
            return deferred.promise;
        }

        function getVevoMetrics() {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/artist/"+id+"/metrics/vevo?api_key=6d26fd60ee690f2cdf287654182c69f2").then(
                function handleSuccess(response) {
                    console.log('success');
                    deferred.resolve(response.data);
                },
                function handleError(response) {
                    console.log('failure');
                }
            );
            return deferred.promise;
        }

        function getLastFmMetrics() {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/artist/"+id+"/metrics/lastfm?api_key=6d26fd60ee690f2cdf287654182c69f2").then(
                function handleSuccess(response) {
                    console.log('success');
                    deferred.resolve(response.data);
                },
                function handleError(response) {
                    console.log('failure');
                }
            );
            return deferred.promise;
        }

        function getTwitterMetrics() {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/artist/"+id+"/metrics/twitter?api_key=6d26fd60ee690f2cdf287654182c69f2").then(
                function handleSuccess(response) {
                    console.log('success');
                    deferred.resolve(response.data);
                },
                function handleError(response) {
                    console.log('failure');
                }
            );
            return deferred.promise;
        }
		
		function getOnlinePrescence() {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/artist/"+id+"/social-urls?api_key=6d26fd60ee690f2cdf287654182c69f2").then(
                function handleSuccess(response) {
                    console.log('success');
                    deferred.resolve(response.data);
                },
                function handleError(response) {
                    console.log('failure');
                }
            );
            return deferred.promise;
        }
		
    });
})();
