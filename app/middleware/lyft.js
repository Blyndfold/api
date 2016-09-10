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

   if (req.err) next()
   else
    var drivers =  [
      {
        "img": "http://i.dailymail.co.uk/i/pix/2015/06/21/18/29D7947C00000578-3133544-image-a-4_1434907477981.jpg",
        "name": "Anakin Skywalker",
        "car": "Brown Custom Podracer",
        "plate": "I<3YODA",
      },
      {
        "img": "https://heavyeditorial.files.wordpress.com/2016/05/harambe-22.jpg?quality=65&strip=all&strip=all",
        "name": "Harambe",
        "car": "Orange Ferrari",
        "plate": "RAM2BAE",
      },
      {
        "img": "http://www.thewrap.com/wp-content/uploads/2015/10/docbrown.jpg",
        "name": "Dr. Emmett Brown",
        "car": "Black DeLorean DMC-12",
        "plate": "OUTATIME",
      },
      {
        "img": "http://vignette4.wikia.nocookie.net/rickandmorty/images/e/ef/Vlcsnap-2015-01-31-02h46m26s111.png/revision/latest?cb=20150131104650",
        "name": "Rick Sanchez",
        "car": "Rick's Spaceship",
        "plate": "TINYRCK",
      },
      {
        "img": "https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_(1977).jpg",
        "name": "Hahn Solo",
        "car": "Millenium Falcon",
        "plate": "CHEWIEE",
      },
      {
        "img": "http://worldversus.com/img/terminator.jpg",
        "name": "Arnold",
        "car": "1990 Harley Davidson",
        "plate": "VSTABBY",
      },
      {
        "img": "http://img.wennermedia.com/620-width/tom-from-myspace-lg.jpg",
        "name": "Tom Anderson",
        "car": "2004 Red Porsche",
        "plate": "MYSPACE",
      },
      {
        "img": "http://img.wennermedia.com/620-width/tom-from-myspace-lg.jpg",
        "name": "Tom Anderson",
        "car": "2004 Red Porsche",
        "plate": "MYSPACE",
      },
    ];
    req.lyft = drivers[Math.floor(Math.random() * (drivers.length))];
    req.lyft.eta = Math.floor(Math.random() * 4 + 3)
    next();

};
