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
        console.error('ERRR DUDE WHAT HAPPENED');
      });
    },
    makeFavorite: function(item) {
      console.log('MAKING FAVORITE POST CALL', item);
      return $http({
        method: 'POST',
        url: '/courts',
        data: {name: item.name}
      })
      .then(function(response) {
        console.log('THIS IS THE RESPONSE', response);
        return response.data;
      }, function(error) {
        console.error('ERROR TRYING TO FAVORITE');
      });
    },
    getFavorites: function() {
      console.log('GETTING FAVORITES!!!!!');
      return $http({
        method:'GET',
        url: '/favorites'
      })
      .then(function(response) {
        return response.data;
      }, function(error) {
        console.log('error WTF HAPPEND DUDE WHYYYYY');
      });
    }
  };
});















