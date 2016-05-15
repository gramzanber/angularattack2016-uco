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
      $rootScope.logged_in = true;
      $rootScope.is_admin = false;
      $state.go('player');
    }
    })
    ;
})();
