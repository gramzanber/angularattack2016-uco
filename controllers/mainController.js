(function () {
    'use strict';
    angular
    .module('app')
    .controller('navbar', function($scope, $http, $q, $state, $window, $interval, $rootScope) {
    if($window.sessionStorage.alreadySearched)
    {
      $rootScope.alreadySearched = $window.sessionStorage.alreadySearched;
    }
    else
    {
      $rootScope.alreadySearched = false;
    }

    });
})();
