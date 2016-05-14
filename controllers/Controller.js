(function () {
    'use strict';
    angular
    .module('app')
    .controller('navbar', function($scope, $http, $q, $state, $window, $interval, $rootScope) {
    $rootScope.logged_in = $window.sessionStorage.logged_in;
    $rootScope.is_admin = $window.sessionStorage.is_admin;

    $scope.logout = function(user){
      $window.sessionStorage.logged_in = false,
      $window.sessionStorage.is_admin = false;
      $rootScope.logged_in = $window.sessionStorage.logged_in;
      $rootScope.is_admin = $window.sessionStorage.is_admin;
      $state.go('login');
    }
    });
})();
