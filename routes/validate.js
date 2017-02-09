var express = require('express');
var router = express.Router();
var requestPromise = require('request-promise');

// Date formater
var dateFormat = require('dateformat');
var now = new Date();

// Routes
var validate = '/';

// 1. Collect recaptcha response from client
// 2. Verify the respone at Google
// 3. Collect the answer
router.post('/', function(req, res, err) {

  console.log('\nPOST: /api/recaptcha/validate ' + '\nDate: ' + now + '\n');

  var secret = "<---- PRIVATE KEY ----->";
  var response = req.body.response;
  var remoteip = "localhost";

  // Google recaptcha verify
  var options = {
    method: 'GET',
    uri: 'https://www.google.com/recaptcha/api/siteverify?',
    qs: {
        secret: secret,
        response: response,
        remoteip: remoteip // optional
    },
    json: true
  };

  requestPromise(options)
      .then(function (data) {
          res.send(data); // Remove after demo

          console.log("/api/siteverify:");
          console.log(JSON.stringify(data, null, 4));
      })
      .catch(function (err) {
          console.log("Error: " + err);
      });
});

module.exports = router;
