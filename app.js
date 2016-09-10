var express = require('express');
var app = new express()
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'YuTliW6vAEGHcFO06vJrrw',
  consumer_secret: 'KE7cmGwoo3Cwx-KY1PQR7HwIOQc',
  token: 'e9uK1oT6tFZmurE4YMg1OOMBi_xjo6Mr',
  token_secret: 'gs58dLtw6vE4FeGt8bshWkZ38vw',
})

app.get('/api/random', function(req, res) {
  var myLoc = req.query.location
  var myType = req.query.type
  if (!myLoc) {
    myLoc = "University of Pennsylvania, Philadelphia"
  }
  if (!myType) {
    myType = "Mexican"
  }
  yelp.search({ term: myType, location: myLoc })
  .then(function (data) {
    if (data.businesses.length > 0) {
      var randInt = Math.floor(Math.random() * (data.businesses.length - 0));
      var thePlace = data.businesses[randInt]
      console.log(thePlace.location.display_address)
      res.send(thePlace.location.display_address.join(", "))
    } else {
      console.log("Error: no yelp business found.")
      res.status(500);
    }
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.listen(3000, function() {
  console.log("Listening on 3000")
})