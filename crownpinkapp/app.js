var express = require('express');
var app = express();

var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

app.get('/', function (req, res) {
  res.send('Day of the Week : ' + appEnv.url);
});

//app.listen(3000, function () {
 // console.log('Example app listening on port 3000!');
//})

app.listen(appEnv.port, appEnv.bind, function() {
    console.log("server starting on " + appEnv.url)
})
