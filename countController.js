var app = angular.module('myModule');
app.controller('countControllers', function ($scope, countServices){

  $scope.name = function() {
  	countServices.saveName($scope.tmName);
  }
    $scope.name = function() {
  	countServices.fizBuzz($scope.tmName);
  }
   

});