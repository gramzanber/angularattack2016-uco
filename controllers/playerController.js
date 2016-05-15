(function () {
    'use strict';
    angular
    .module('app')
    .controller('playerController', function playerController($scope, $rootScope, $http, $q, $state, $window) {

			if ($rootScope.artistId) $window.sessionStorage.id = $rootScope.artistId;
			if ($rootScope.artistName) $window.sessionStorage.name = $rootScope.artistName;
			var id = $rootScope.artistId = $window.sessionStorage.id; console.log(id);
			$rootScope.alreadySearched = true;
		
	  getTopVideo().then(
    		function(response) {
					console.log("https://www.youtube.com/watch?v=" + response.data[0].track_youtube_id); //Youtube video
    	}
    );

	function getTopVideo() {
            var deferred = $q.defer();
            $http.get("http://api.musicgraph.com/api/v2/playlist?api_key=6d26fd60ee690f2cdf287654182c69f2&artist_ids="+id+"&limit=1").then(
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
