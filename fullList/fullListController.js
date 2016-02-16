//fullList controller
angular.module('fullList', [])

.controller('fullListCtrl', function($scope, MyYelpAPI) {

  $scope.getList = function(city) {
    console.log('LIST IS RUNNING');
    MyYelpAPI.getCourts(city)
      .then(function(list) {
        $scope.getList.items = list;
        console.log("LIST ITEMS", $scope.getList.items);
    });
  };

  $scope.getListIndoor = function(city) {
    console.log('LIST IS RUNNING');
    MyYelpAPI.getIndoorCourts(city)
      .then(function(list) {
        $scope.getListIndoor.items = list;
        console.log("LIST ITEMS", $scope.getListIndoor.items);
    });
  };

  $scope.putInFavorites = function(item) {
    MyYelpAPI.makeFavorite(item);
    console.log('I AM IN PUTIN IN FAVORIEOAKN', item);
  };

});