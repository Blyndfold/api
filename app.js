var express = require('express');
var app = new express();
var yelp = require('./app/middleware/yelp');
var lyft = require('./app/middleware/lyft');
var twilio = require('./app/middleware/twilio');

app.get('/api/random', [yelp, lyft, twilio], function(req, res) {
  if (req.err) res.status(req.err)
  else {
    res.status(200);
    res.send({
      'yelp': req.yelp,
      'lyft': req.lyft
    });
  }
});

app.listen(3000, function() {
  console.log("Listening on 3000")
});
