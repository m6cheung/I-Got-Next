/* require the modules needed */
var oauthSig = require('oauth-signature');  
var n = require('nonce')();  
var request = require('request');  
var qs = require('querystring');  
var _ = require('lodash');
var keys = require('./keys.js');

/* set_parameters: object with params to search
 * callback: callback(error, response, body)
 */
module.exports = function(custom_parameters, callback) {

  /* The type of request */
  var httpMethod = 'GET';

  /* The url we are using for the request */
  var url = 'http://api.yelp.com/v2/search';

  /* We can setup default parameters here */
  var SF_parameters = {
    location: 'San+Francisco',
    sort: '1'
  };

  /* We set the require parameters here */
  var required_parameters = {
    oauth_consumer_key : keys.CONSUMER_KEY,
    oauth_token : keys.TOKEN,
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  /* We combine all theq parameters in order of importance */ 
  var parameters = _.assign(SF_parameters, custom_parameters, required_parameters);

  /* We set our secrets here */
  var consumerSecret = keys.CONSUMER_SECRET;
  var tokenSecret = keys.TOKEN_SECRET;

  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
  var signature = oauthSig.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  /* We add the signature to the list of paramters */
  parameters.oauth_signature = signature;

  /* Then we turn the paramters object, to a query string */
  var paramURL = qs.stringify(parameters);

  /* Add the query string to the url */
  var apiURL = url+'?'+paramURL;

  /* Then we use request to send make the API Request */
  request(apiURL, function(error, res, body){
    return callback(error, res, body);
  });
};


// request_yelp({category_filter: 'recreation', limit: 1}, function(err, response, body) {
//   if(err) {
//     console.log('ERROR!! ================================>', err);
//   }
//   body = JSON.parse(body);
//   console.log('BODY-------------------------------------------->', body.businesses);
//   // console.log('response------------------------------------------>', response);
// })






