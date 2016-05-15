(function () {
    'use strict';
    angular
    .module('app')
    .controller('search_Controller', function search_Controller($scope, $rootScope, $http, $q, $state, $window) {
  	
		$scope.search = function(param){ console.log(param);
			getResults(param).then(
                function(data) {
                    $rootScope.searchId = data.data[0].id;
					console.log($rootScope.searchId);
                }
			);
		}
		
		function getResults(param) {
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
    });
})();
