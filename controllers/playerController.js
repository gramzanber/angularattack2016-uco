(function () {
    'use strict';
    angular
    .module('app')
    .controller('playerController', function playerController($scope, $sce, $http, $q, $state, $window, $timeout) {
    
	var player = angular.element(document.getElementById("audioPlayer"));
	var song;
	
	$scope.paused = true;
	$scope.currentSong = {
		source: "http://www.mbr-pwrc.usgs.gov/id/htmwav/h5810so.mp3"
	}
	$scope.songs = [];
    $scope.songs[0] = {
      artist: 'Omid',
      title: 'Hacking Away',
      album: 'Why am I still awake?',
      year: '2016',
      url: 'http://www.mbr-pwrc.usgs.gov/id/htmwav/h5810so.mp3',
	  paused: true
    }
	$scope.songs[1] = {
		artist: 'Drew',
		title: 'Backend Baby',
		album: 'All about that back',
		year: '2017',
		url: 'https://ia800309.us.archive.org/28/items/Mp3Songs_175/actionreplayy04www.songs.pk.mp3',
		paused: true
	}
	
	$scope.playSong = function(thisSong){
		if (song) {
			if (!song.paused){
				song.pause();
				$timeout(function() {
					if (song.src != thisSong.url){
						song = new Audio(thisSong.url);
						song.load();
						song.play();
					} else {
						thisSong.paused = true;
					}			
				}, 150);
			} else {
				song.play();
				thisSong.paused = false;
			}
		} else {
			song = new Audio(thisSong.url);
			song.play();
			thisSong.paused = false;
		}
	}
	
	$scope.trustSrc = function(source) {
		return $sce.trustAsResourceUrl(source);
	}
    });
})();
