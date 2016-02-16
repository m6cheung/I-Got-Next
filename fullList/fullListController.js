//fullList controller
angular.module('fullList', [])

.controller('fullListCtrl', function($scope) {
  $scope.list = myYelpAPI.getCourts()
  .then(function(list) {
    $scope.list.items = list;
    console.log("LIST ITEMS", $scope.list.items);
  });
});