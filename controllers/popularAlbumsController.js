(function () {
    'use strict';
    angular
    .module('app')
    .controller('popularAlbumsController', function socialmediaController($scope, $rootScope, $http, $q, $state, $window) {

		$scope.search = function(param){ console.log(param);
			getResults(param).then(
                function(response) {
                    $scope.spotifyurl = response;
					console.log($scope.spotifyurl);
                }
			);
            $state.go('player');
		}

    $scope.social_media = function(){
			$state.go('socialMedia');
		}

    $scope.playlist = function(){
			$state.go('player');
		}

		function getResults(param) {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/artist/"+param.$rootScope.artistId+"/metrics?api_key=6d26fd60ee690f2cdf287654182c69f2").then(
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
