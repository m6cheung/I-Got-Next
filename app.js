angular.module('app', [
  'basketball.requests',
  'fullList',
  'ngRoute', 
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/courts', {
      templateUrl: 'fullList/fullList.html',
      controller: 'fullListCtrl'
    })
    .otherwise({redirectTo: '/'});
})