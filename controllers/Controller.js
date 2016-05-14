(function () {
    'use strict';
    angular
    .module('app')
    .controller('navbar', function($scope, $http, $q, $state, $window, $interval, $rootScope) {
    $rootScope.logged_in = false,
    $rootScope.is_admin = false;

    $scope.logout = function(user){
      $rootScope.logged_in = false,
      $rootScope.is_admin = false;
      $state.go('login');
    }
    })
    .controller('administration_Controller', function($scope, $http, $q, $state, $window, $interval) {
    $scope.reset_password = function(user){
    }
    $scope.edit_user = function(user){
    }
    $scope.delete_user = function(user){
    }
    })
    .controller('login_Controller', function($scope, $http, $q, $state, $window, $interval, $rootScope) {
    $scope.register = function(){
      $state.go('register');
    }
    $scope.authenticate = function(user,password){
      $rootScope.logged_in = true,
      $rootScope.is_admin = false;
      $state.go('player');
    }
    })
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
    .controller('register_Controller', function($scope, $http, $q, $state, $window, $interval) {
    $scope.login = function(){
      $state.go('login');
    }
    $scope.new_user = function(){
    }
    })
    .controller('settings_Controller', function($scope, $http, $q, $state, $window, $interval) {
    $scope.update_user = function(user){
    }
    })
    .controller('upload_Controller', function($scope, $http, $q, $state, $window, $interval) {
    $scope.add_song = function(){
    }
    });
})();
