(function () {
    'use strict';
    angular
    .module('app')
    .controller('aboutController', function($scope, $http, $q, $state, $window, $interval, $rootScope) {
    $scope.programmers = [];
    $scope.programmers[0] = {
      name: "Omid Nowrouzi",
      bio: "Lover of dogs, and without Omid doing most (95%) of the angular logic we would be in deep trouble.",
      picture: "https://avatars2.githubusercontent.com/u/15151458?v=3&s=400"
    }
    $scope.programmers[1] = {
      name: "Drew Demechko",
      bio: "Leader of this outfit, he has taken lead of this awesome project.",
      picture: "https://avatars1.githubusercontent.com/u/9544009?v=3&s=400"
    }
    $scope.programmers[2] = {
      name: "Tyrel Tachibana",
      bio: "Seasoned programmer whom is still proned to beginner mistakes, like forgetting to delcare my array first!",
      picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAYtAAAAJGNlYTg1NjQwLTZjN2ItNGE0ZS1hOGIwLTM0MjFlOTIyNzEwZg.jpg"
    }

    });
})();
