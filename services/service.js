angular.module('basketball.requests', [])

.factory("MyYelpAPI", function($http) {
  return {
    getCourts: function(city) {
      console.log("GETTING THE COURTS");
      return $http({
        method: 'GET',
        url: '/courts',
        params: {category_filter: 'basketballcourts', 'location': city, sort: '1'}
      })
      .then(function(response) {
        console.log('THIS IS THE GET RESPONSE BRO!!!!!', response);
        return response.data;
      }, function(error) {
        console.error('ERRR DUDE WHAT HAPPENED');
      });
    },
    getIndoorCourts: function(city) {
      console.log("GETTING THE COURTS");
      return $http({
        method: 'GET',
        url: '/courts',
        params: {category_filter: 'recreation', 'location': city, sort: '1'}
      })
      .then(function(response) {
        console.log('THIS IS THE GET RESPONSE BRO!!!!!', response);
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
        data: {name: item.name, 
          city: item.location.city,
          address: item.location.address[0],
          state: item.location.state_code,
          zip: item.location.postal_code,
          phone: item.display_phone,
          url: item.url,
          image: item.image_url
        }
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
    },
    deleteFavorite: function() {

    }
  };
});















