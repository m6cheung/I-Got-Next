var 
angular.module('basketball.requests', [])

.factory("MyYelpAPI", function() {
  return {
    getCourts: function() {
      console.log("GETTING THE COURTS");

    }
  }
});