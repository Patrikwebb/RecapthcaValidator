// Express
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Date formater
var dateFormat = require('dateformat');
var now = new Date();
var dateTime = dateFormat(now, "dddd, mmmm dS, yyyy, H:MM:ss");

// Routes
var info = require('./routes/info');
var validate = require('./routes/validate');

// Security
var server;
var port = 3000;

// Cors
var corsMiddleware = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Allow' , 'GET , POST , OPTIONS' );
  next();
};

app.use(bodyParser.json());
app.use(corsMiddleware);
// app.use(cors());

// Routes
app.use('/api/recaptcha/info', info);
app.use('/api/recaptcha/validate', validate);

// Home route for test
app.use('/', function(req, res, err){
  console.log("Incoming request: \tGET /");
  res.send('Google Invisible Recaptcha Validator service is up');
});

app.listen(port, function () {
  console.log('Recaptcha server started port: ' + port + "\t"+ dateTime);
});
