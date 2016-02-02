var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();



//app.listen(3000, function () {
 // console.log('Example app listening on port 3000!');
//})
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ n });   
});

// more routes for our API will happen here
//Test
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(appEnv.port, appEnv.bind, function() {
    console.log("server starting on " + appEnv.url)
})
