var lyftClientToken = "gAAAAABX0-WP_HMg-sBoHMrsZ9qq09VmrMHAdJswfA7OA5aa459GTmom3GgRhwCCSmL5w09PX2l7QuJBRlIWlWrQCwqPIXpKxYf2yEjH5TIy_gljGsgJ3dMizI0QWUaxEiMrNVwOvGZlV3o2gYTY0McrW5h3ksUQMuEf7rLnNIO5CEgnib8J7W0=";
var lyftClientSecret = "YwRXkJUN_CPsbjrYv_i8tvOqyDS1XzkV";

var Lyft = require('lyft-api');
var lyft = LyftApi.ApiClient.default;

// Lyft OAuth2
var LyftClientAuth = defaultClient.authentications['Client Authentication'];
LyftClientAuth.accessToken = lyftClientToken;
var LyftPublicAuth = defaultClient.authentications['User Authentication'];
LyftPublicAuth = lyftClientToken;

var lyftapi = new LyftApi.PublicApi();

module.exports = function(req, res, next) {

  /* Call Lyft API here.
   *  - Authenticate User
   *  - Request information from User's Client (User's Current Location)
   *  - Format and send request to Lyft (must contain: Ride Type,
   *      Starting Longitude, Starting Latitude, Ending Longitude, and
   *      Ending Latitude)
   *  - Expect Lyft to return an object with the ride ETA and driver info
   * format and return lyft response object to user's client. then callback next();
   */

};
