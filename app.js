var express = require('express');
var app = new express();
var yelp = require('./app/middleware/yelp');
var places = require('./app/middleware/places');
var lyft = require('./app/middleware/lyft');
var twilio = require('./app/middleware/twilio');
var twilioAPI = require('twilio')('AC22b9e3d62610aaef92c4bdab5c7b811a', '251943b2b70688e5d59e8509f7427d78');

function text(eta, lyft, phone) {
  var message = 'Your lyft will be arriving in ' + eta + ' minutes.';
  if (eta == 1) message = 'Your lyft will be arriving in ' + eta + ' minute. Please be ready for your Blyndfold.';
  else if (eta == 0) message = 'Your lyft is arriving now. Enjoy your Blyndfold!';
  message += ' Your driver, ' + lyft.name +', is driving a ' + lyft.car + ' with license plate ' + lyft.plate + '.';
  twilioAPI.sendMessage({
    to: phone || "+16507993840",
    from: '+16503004250',
    body: message,
    }, function(err, responseData) { //this function is executed when a response is received from Twilio
        if (!err) { // "err" is an error received during the request, if any
            console.log(responseData.from); // outputs "+14506667788"
            console.log(responseData.body); // outputs "word to your mother."
        }
    }
  );
}


app.get('/api/random', [places, lyft, twilio], function(req, res) {
  if (req.err) res.status(req.err)
  else {
    if (req.query.phone) {
      var myArr = []
      var count = 1;
      while (req.lyft.eta != 0) {
        req.lyft.eta -= 1;
        var eta = req.lyft.eta
        myArr.push({eta: eta, count: count})
        count++;
      }
      myArr.forEach(function(myObj) {
        setTimeout(function() {text(myObj.eta, req.lyft, req.query.phone);}, 60000 * myObj.count);
      })
    }
    res.status(200).send({
      'theplace': req.theplace,
      'lyft': req.lyft
    });
  }
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on 3000")
});
