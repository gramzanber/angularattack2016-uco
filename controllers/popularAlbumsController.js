(function () {
    'use strict';
    angular
    .module('app')
    .controller('popularAlbumsController', function socialmediaController($scope, $rootScope, $http, $q, $state, $window) {

		$scope.social_media = function(){
			$state.go('socialMedia');
		}

		$scope.playlist = function(){
			$state.go('player');
		}

		console.log("ARTIST NAME: " + $rootScope.artistName);
		
		getTopAlbums().then(
            function(response) {
				$scope.albums = response.data;
					console.log(response.data[0].title); //album title
                    console.log(response.data[0].number_of_tracks); //# of tracks
                    console.log(response.data[0].main_genre); //genre
                    console.log(response.data[0].release_date); //release date
            }
        );
		
		function getTopAlbums() {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/album/search?api_key=6d26fd60ee690f2cdf287654182c69f2&artist_name="+$rootScope.artistName+"&top_rated=true&fields=title,release_date,number_of_tracks,main_genre").then(
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
