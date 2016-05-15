(function () {
    'use strict';
    angular
    .module('app')
    .controller('playerController', function playerController($scope, $sce, $http, $q, $state, $window, $timeout) {
    
	var player = angular.element(document.getElementById("audioPlayer"));
	var song;
	$scope.audio = new Audio();
	
	$scope.paused = true;
	$scope.currentSong = {
		url: "https://ia800309.us.archive.org/28/items/Mp3Songs_175/musaa01www.songs.pk.mp3"
	}
	$scope.songs = [];
    $scope.songs[0] = {
      artist: 'Omid',
      title: 'Hacking Away',
      album: 'Why am I still awake?',
      year: '2016',
      url: 'https://ia800309.us.archive.org/28/items/Mp3Songs_175/musaa01www.songs.pk.mp3',
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
		$scope.currentSong = thisSong;
		if ($scope.audio) {
			if (!$scope.audio.paused){
				$scope.audio.pause();
				$timeout(function() {
					if ($scope.audio.src != thisSong.url){ 
						$scope.audio = new Audio(thisSong.url);
						$scope.audio.load();
						$scope.audio.play();
					} else {
						thisSong.paused = true;
					}			
				}, 150);
			} else {
				$timeout(function() {
					thisSong.paused = false;
					$scope.audio.play();
				}, 150);
			}
		} else {
			$timeout(function() {
				$scope.audio.src = thisSong.url;
				thisSong.paused = false;
				$scope.audio.load();
				$scope.audio.play();
			}, 150);
		}
	}
	
	$scope.trustSrc = function(source) {
		return $sce.trustAsResourceUrl(source);
	}
    });
})();
