//favorite controller
angular.module('favoritesList', [])

.controller('favoritesCtrl', function($scope, MyYelpAPI) {
  $scope.favoriteItem = function(item) {
    console.log('WHAT IS THE ITEM', item);
    MyYelpAPI.makeFavorite(item);
  }
});