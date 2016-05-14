(function () {
    'use strict';
    angular
    .module('app')
    .controller('playerController', function playerController($scope, $http, $q, $state, $window, $interval) {
    $scope.songs = [];
    $scope.songs[0] = {
      artist: 'Omid',
      title: 'Hacking Away',
      album: 'Why am I still awake?',
      year: '2016',
      url: 'www.codeeveryday.org'
    }
    $scope.play = function(song){
      $scope.currentSong = song;
    }
    });
})();
