(function () {
    'use strict';
    angular
    .module('app')
    .controller('playerController', function playerController($scope, $sce, $http, $q, $state, $window, $interval) {
    
	$scope.currentSong = {
		source: "http://www.mbr-pwrc.usgs.gov/id/htmwav/h5810so.mp3"
	}
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
	
	$scope.trustSrc = function(source) {
		return $sce.trustAsResourceUrl(source);
	}
    });
})();
