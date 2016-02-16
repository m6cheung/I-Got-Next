angular.module('app', [
  'basketball.requests',
  'fullList',
  'favoritesList',
  'ngRoute', 
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/courts', {
      templateUrl: 'fullList/fullList.html',
      controller: 'fullListCtrl'
    })
    .when('/favorites', {
      templateUrl: 'favorites/favorites.html',
      controller: 'favoritesCtrl'
    })
    .otherwise({redirectTo: '/'});
})