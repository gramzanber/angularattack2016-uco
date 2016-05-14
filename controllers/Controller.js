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
		})
    .controller('navbar', function($scope, $http, $q, $state, $window, $interval) {
    $scope.logged_in = false,
    $scope.is_admin = false;

    $scope.logout = function(user){
      $scope.logged_in = false,
      $scope.is_admin = false;
    }
    })
    .controller('login_Controller', function($scope, $http, $q, $state, $window, $interval) {

    $scope.register = function(){
      $state.go('register');
    }
    $scope.authenticate = function(user,password){
      $scope.logged_in = true,
      $scope.is_admin = false;
    }
    })
    controller('upload_Controller', function($scope, $http, $q, $state, $window, $interval) {

    $scope.register = function(user){
    }
    $scope.authenticate = function(user,password){
    }
    })
    controller('administration_Controller', function($scope, $http, $q, $state, $window, $interval) {

    $scope.register = function(user){
    }
    $scope.authenticate = function(user,password){
    }
    })
    controller('settings_Controller', function($scope, $http, $q, $state, $window, $interval) {

    $scope.register = function(user){
    }
    $scope.authenticate = function(user,password){
    }
    })
    controller('register_Controller', function($scope, $http, $q, $state, $window, $interval) {

    $scope.login = function(){
      $state.go('/');
    }
    $scope.new_user = function(){
    }
    });
})();
