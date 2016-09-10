var twilio = require('twilio')('AC22b9e3d62610aaef92c4bdab5c7b811a', '251943b2b70688e5d59e8509f7427d78');

module.exports = function(req, res, next){
  /* Send text to user via twilio
   *
   * -Grab auth keys from twilio.com
   * -WE NEED TO COLLECT THE USER'S PHONE NUMBER SOMEHOW.
   *    - Lyft allows login using only phone# and verification code
   * -Once object from Lyft is received, send text message to user containing
   *  the contents of the Lyft response object
   * -next();
   */
  if (req.err) next();
  var message = 'Your lyft will be arriving in ' + req.lyft.eta + ' minutes.'
  if (req.lyft.eta == 1) message = 'Your lyft will be arriving in ' + req.lyft.eta + ' minute. Please be ready for your Blyndfold.'
  else if (req.lyft.eta == 0) message = 'Your lyft is arriving now. Enjoy your Blyndfold!'
  message += ' Your driver, ' + req.lyft.name +', is driving a ' + req.lyft.car + ' with license plate ' + req.lyft.plate + '.'
  twilio.sendMessage({
    to: req.query.phone || "+16507993840",
    from: '+16503004250',
    body: message,
    }, function(err, responseData) { //this function is executed when a response is received from Twilio
        if (!err) { // "err" is an error received during the request, if any
            console.log(responseData.from); // outputs "+14506667788"
            console.log(responseData.body); // outputs "word to your mother."
        }
    });
  next();
};
