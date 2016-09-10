var GooglePlaces = require('google-places');
var places = new GooglePlaces('AIzaSyAP8KGW9N3KPxDiPhqPWC0WAC2-BUwK64M');
var _ = require('underscore')

module.exports = function(req, res, next) {
  places.search({
      keyword: req.query.term || "Mexican Food", 
      location: ["39.947274","-75.147681"],
      radius: Number.parseInt(req.query.radius) || 5000,
      opennow: true,
      minprice: req.query.minprice || 0,
      maxprice: req.query.maxprice || 4,
    }, function(err, response) {
    if (err) {
      console.error(err);
      req.err = 500;
      next();
    } else {
      if (response.results.length > 0) {
        var randInt = Math.floor(Math.random() * (response.results.length - 0));
        var thePlace = response.results[randInt]
        places.details({reference: thePlace.reference}, function(err, response) {
          if (err) {
            console.error(err)
            req.err = 500;
            next();
          } else {
            req.theplace = _.pluck(response.result.address_components, 'long_name').join(", ");
            next();
          }
        });
      } else {
        req.err = 404;
        next();
      }
    }
  });
}
