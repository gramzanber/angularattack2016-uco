(function () {
    'use strict';
    angular
    .module('app')
    .controller('search_Controller', function search_Controller($scope, $rootScope, $http, $q, $state, $window) {

		$scope.search = function(param){ 
		
			getArtistInfo(param).then(
                function(response) {
                    $rootScope.artistId = response.data[0].id;
                    $rootScope.artistName = response.data[0].name;
					console.log("ARTIST ID: " + $rootScope.artistId);
                    console.log($rootScope.artistName);
					$rootScope.alreadySearched = true;
					$state.go("socialMedia");
                }
            );
			
		}
/*        getTopAlbums(param).then(
                function(response) {
					console.log(response.data[0].title); //album title
                    console.log(response.data[0].number_of_tracks); //# of tracks
                    console.log(response.data[0].main_genre); //genre
                    console.log(response.data[0].release_date); //release date
                }
            );

           getTopVideo(param).then(
                function(response) {
					console.log("https://www.youtube.com/watch?v=" + response.data[0].track_youtube_id); //Youtube video
                }
            );
		}
*/		
		function getArtistInfo(param) {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/artist/search?api_key=6d26fd60ee690f2cdf287654182c69f2&name="+param+"&limit=1&fields=id,name").then(
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
/*
		function getTopAlbums(param) {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/album/search?api_key=6d26fd60ee690f2cdf287654182c69f2&artist_name="+param+"&top_rated=true&limit=1&fields=title,release_date,number_of_tracks,main_genre").then(
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

        function getTopVideo(param) {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/playlist?api_key=6d26fd60ee690f2cdf287654182c69f2&artist_ids=ee2564c7-a6b5-11e0-b446-00251188dd67&limit=1").then(
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
*/
    });
})();
