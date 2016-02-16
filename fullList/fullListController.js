//fullList controller
angular.module('fullList', [])

.controller('fullListCtrl', function($scope, MyYelpAPI) {
  $scope.list = MyYelpAPI.getCourts()
  .then(function(list) {
    $scope.list.items = list;
    console.log("LIST ITEMS", $scope.list.items);
  });
  $scope.putInFavorites = function(item) {
    MyYelpAPI.makeFavorite(item);
    console.log('I AM IN PUTIN IN FAVORIEOAKN', item);
  }
});