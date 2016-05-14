(function () {
    'use strict';
    angular
    .module('app')
    .controller('login_Controller', function($scope, $http, $q, $state, $window, $interval, $rootScope) {
    $scope.register = function(){
      $state.go('register');
    }
    $scope.authenticate = function(user,password){
      $window.sessionStorage.logged_in = true,
      $window.sessionStorage.is_admin = false;
      $rootScope.logged_in = $window.sessionStorage.logged_in;
      $rootScope.is_admin = $window.sessionStorage.is_admin;
      $state.go('player');
    }
    })
    ;
})();
