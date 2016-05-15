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
/*
			getTopVideo(param).then(
                function(response) {
					console.log("https://www.youtube.com/watch?v=" + response.data[0].track_youtube_id); //Youtube video
                }
            );
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
/*        function getTopVideo(param) {
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
    $scope.param = undefined;
    $scope.states = [];

    $scope.onedit = function(param){
		$scope.states = [];

		getArtists(param).then(
              function(response) {
                if(param) {
                for(var i = 0; i < 5; i++)
                {
                  var value = "";

                  for(var j = 0; j < i; j++){
                    value += j;
                  }
                  $scope.states.push(response.data[i].name);
                }
              }
            }
          );
    }

    function getArtists(param) {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/artist/suggest?api_key=6d26fd60ee690f2cdf287654182c69f2&prefix="+param+"&limit=5").then(
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
