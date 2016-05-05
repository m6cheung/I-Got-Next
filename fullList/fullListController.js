//fullList controller
angular.module('fullList', [])

.controller('fullListCtrl', function($scope, MyYelpAPI) {

  $scope.getList = function(city) {
    MyYelpAPI.getCourts(city)
      .then(function(list) {
        $scope.getList.items = list;
    });
  };

  $scope.getListIndoor = function(city) {
    console.log('LIST IS RUNNING');
    MyYelpAPI.getIndoorCourts(city)
      .then(function(list) {
        $scope.getListIndoor.items = list;
    });
  };

  $scope.putInFavorites = function(item) {
    MyYelpAPI.makeFavorite(item);
  };
});