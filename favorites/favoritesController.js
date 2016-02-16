//favorite controller
angular.module('favoritesList', [])

.controller('favoritesCtrl', function($scope, MyYelpAPI) {
  $scope.favorites = MyYelpAPI.getFavorites()
    .then(function(faves) {
      $scope.favorites.items = faves;
      console.log('THIS IS THE DATA', $scope.favorites.items);
    });
});