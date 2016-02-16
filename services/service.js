angular.module('basketball.requests', [])

.factory("MyYelpAPI", function($http) {
  return {
    getCourts: function() {
      // console.log("GETTING THE COURTS");
      return $http({
        method: 'GET',
        url: '/courts',
        params: {'category_filter': 'recreation'}
      })
      .then(function(response) {
        // console.log('THIS IS THE GET RESPONSE BRO!!!!!', response);
        return response.data;
      }, function(error) {
        console.error('ERRR DUDE WHAT HAPPENED')
      });
    },
    makeFavorite: function(item) {
      console.log('MAKING FAVORITE POST CALL', item);
      return $http({
        method: 'POST',
        url: '/courts',
        data: {rec: item.name}
      })
      .then(function(response) {
        console.log('THIS IS THE RESPONSE', response);
        return response;
      }, function(error) {
        console.error('ERROR TRYING TO FAVORITE');
      });
    }
  };
});