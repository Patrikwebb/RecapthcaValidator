var express = require('express');
var router = express.Router();

// Date formater
var dateFormat = require('dateformat');
var now = new Date();

// Routes
var info = '/';

// Collect feedback from the recaptcha client
router.post('/', function(req, res, err){

  console.log("\nPOST /api/recaptcha/info");

  console.log(JSON.stringify(req.body, null, 4));
  console.log("Date: " + now + "\n");




  //  - What user?
  //  - How many attempts
  //  - phoneId 

});

module.exports = router;
