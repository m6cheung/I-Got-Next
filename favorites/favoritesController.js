//favorite controller
angular.module('favoritesList', [])

.controller('favoritesCtrl', function($scope, MyYelpAPI) {
  $scope.favorites = MyYelpAPI.getFavorites()
    .then(function(faves) {
      $scope.favorites.items = faves;
      console.log('THIS IS THE DATA', $scope.favorites.items);
    });

    $scope.favoritesDelete = function(item) {
      console.log('ITEM', item);
      MyYelpAPI.deleteFavorite(item)
        .then(function(deleted) {
          MyYelpAPI.getFavorites()
            .then(function(faves) {
              $scope.favorites.items = faves
            })
          console.log('DELETED ITEMS', $scope.favoritesDelete.deleted);
        });
    };
});