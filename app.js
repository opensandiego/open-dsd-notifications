// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var request = require('request');
var url = require('url');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  var dsdURL = "http://opendsd.sandiego.gov/web/Api/Maps/CECase?SearchType=CECase&SouthWestLatitude=32.71879985593221&SouthWestLongitude=-117.16525563507082&NorthEastLatitude=32.74399836325726&NorthEastLongitude=-117.12534436492922&Page=1&PageLimit=100";
  request(dsdURL, function(error, response, body) {
    res.json(body);
  });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);