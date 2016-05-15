(function () {
    'use strict';
    angular
    .module('app')
    .controller('aboutController', function($scope, $http, $q, $state, $window, $interval, $rootScope) {
    $scope.programmers[0] = {
      name: "test",
      bio: "test2",
      picture: "test3"
    }
    $scope.programmers[1] = {
      name: "test",
      bio: "test2",
      picture: "test3"
    }
    $scope.programmers[2] = {
      name: "test",
      bio: "test2",
      picture: "test3"
    }

    });
})();
