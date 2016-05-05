angular.module('basketball.requests', [])

.factory("MyYelpAPI", function($http) {
  return {
    getCourts: function(city) {
      return $http({
        method: 'GET',
        url: '/courts',
        params: {category_filter: 'basketballcourts', 'location': city, sort: '1'}
      })
      .then(function(response) {
        return response.data;
      }, function(error) {
        console.error('error', error);
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
        return response.data;
      }, function(error) {
        console.error('error', error);
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
        return response.data;
      }, function(error) {
        console.error('error', error);
      });
    },
    getFavorites: function() {
      return $http({
        method:'GET',
        url: '/favorites'
      })
      .then(function(response) {
        return response.data;
      }, function(error) {
        console.log('error', error);
      });
    },
    deleteFavorite: function(itemName) {
      console.log('INSIDE DELETE FAVORITE');
      return $http({
        method: 'DELETE',
        url:'/favorites',
        params: {name: itemName}
      })
      .then(function(response) {
        return response.data;
      }, function(error) {
        console.log('error', error);
      });
    }
  };
});















