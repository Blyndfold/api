var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'YuTliW6vAEGHcFO06vJrrw',
  consumer_secret: 'KE7cmGwoo3Cwx-KY1PQR7HwIOQc',
  token: 'e9uK1oT6tFZmurE4YMg1OOMBi_xjo6Mr',
  token_secret: 'gs58dLtw6vE4FeGt8bshWkZ38vw',
})

module.exports = function(req, res, next) {
  req.query.term = req.query.term || "Mexican Food";
  req.query.location = req.query.location || "3300 Walnut St, Philadelphia";
  req.query.radius = Number.parseInt(req.query.radius) || 5000;

  yelp.search({
    term: req.query.term,
    location: req.query.location,
    radius_filter: req.query.radius
  })
  .then(function (data) {
    if (data.businesses.length > 0) {
      var randInt = Math.floor(Math.random() * (data.businesses.length - 0));
      var thePlace = data.businesses[randInt]
      req.yelp = thePlace.location.display_address.join(", ");
      next();
    } else {
      req.err = 404;
      next();
    }
  })
  .catch(function (err) {
    console.error(err);
    req.err = 500;
    next();
  });
}
