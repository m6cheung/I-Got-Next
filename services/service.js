angular.module('basketball.requests', [])

.factory("myYelpAPI", function() {
  return {
    getCourts: function() {
      console.log("GETTING THE COURTS");
      return $http({
        method: 'GET',
        url: '/courts'
      })
      .then(function(response) {
        console.log('THIS IS THE GET RESPONSE BRO!!!!!');
        return response.data;
      }, function(error) {
        console.error('ERRRO DUDE WHAT HAPPENED');
      });
    }
  };
});