(function () {
    'use strict';
    angular
    .module('app')
    .controller('register_Controller', function($scope, $http, $q, $state, $window, $interval) {
    $scope.login = function(){
      $state.go('login');
    }
    $scope.new_user = function(){
    }
    });
})();
