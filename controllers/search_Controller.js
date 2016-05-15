(function () {
    'use strict';
    angular
    .module('app')
    .controller('search_Controller', function search_Controller($scope, $sce, $http, $q, $state, $window, $timeout) {
  	$scope.search = function(){
      $scope.display_search = true;
  	}
    });
})();
