(function () {
    'use strict';
    angular
    .module('app')
    .controller('aboutController', function($scope, $http, $q, $state, $window, $interval, $rootScope) {
    $scope.programmers = [];
    $scope.programmers[0] = {
      name: "Omid Nowrouzi",
      bio: "insert your bio",
      picture: "test3"
    }
    $scope.programmers[1] = {
      name: "Drew Demechko",
      bio: "insert your bio",
      picture: "https://avatars1.githubusercontent.com/u/9544009?v=3&s=400"
    }
    $scope.programmers[2] = {
      name: "Tyrel Tachibana",
      bio: "Seasoned programmer whom is still proned to beginner mistakes, like forgetting to delcare my array first!",
      picture: "/images/Github-48.png"
    }

    });
})();
