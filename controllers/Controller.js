(function () {
    'use strict';
    angular
    .module('app')
    .controller('navbar', function($scope, $http, $q, $state, $window, $interval, $rootScope) {
    if($window.sessionStorage.logged_in)
    {
      $rootScope.logged_in = $window.sessionStorage.logged_in;
      $rootScope.is_admin = $window.sessionStorage.is_admin;
      console.log("if");
    }
    else
    {
      $rootScope.logged_in = false;
      $rootScope.is_admin = false;
      console.log("else");
    }
    console.log("Session Logged in:" + $window.sessionStorage.logged_in);
    console.log("Session Admin:" + $window.sessionStorage.is_admin);
    console.log("Root Logged in:" + $rootScope.logged_in);
    console.log("Root admin:" + $rootScope.is_admin);
    $scope.logout = function(user){
      $window.sessionStorage.logged_in = false,
      $window.sessionStorage.is_admin = false;
      $rootScope.logged_in = $window.sessionStorage.logged_in;
      $rootScope.is_admin = $window.sessionStorage.is_admin;
      $state.go('login');
    }
    });
})();
