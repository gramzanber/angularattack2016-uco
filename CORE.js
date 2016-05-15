var scotchSong = angular.module('scotchSong', []);

function mainController($scope, $http){
    $scope.formData = {};
    
    $http.get('/api/songs')
        .success(function(data){
            $scope.songs = data;
            console.log(data);
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
  $scope.createSong = function(){
      $http.post('/api/songs', $scope.formData)
        .success(function(data){
            $scope.formData = {};
            $scope.songs = data;
            console.log(data);
        })
        .error(function(data){
           console.log('Error: ' + data); 
        });
  };
  
  $scope.deleteSong = function(id){
      $http.delete('/api/songs/' + id)
        .success(function(data){
            $scope.songs = data;
            console.log(data);
        })
        .error(function(data){
           console.log('Error: ' + data); 
        });
  };
}