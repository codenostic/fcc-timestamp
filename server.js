// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// var date = require("./public/date.js");
var moment = require('moment');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:date", function(req, res){
  var jsonResult = {unix: 0, natural: ''}
	// check date is valid or not 
	var mNatural = moment(req.params.date, ['MMMM DD, YYYY', 'MMM D, YYYY', 'MMMM D, YYYY'],true);
	var mUnix = moment(req.params.date, ['x'], true);
	
	if(!(mNatural.isValid() || mUnix.isValid())){
		jsonResult.unix = null;
		jsonResult.natural = null;
		res.send(JSON.stringify(jsonResult))
		return;
	}
	
	// check date is sting format if yes - send response 
	if(mNatural.isValid()){
		jsonResult.unix = mNatural.format('x');
		jsonResult.natural = mNatural.format('MMMM DD, YYYY');
		res.send(JSON.stringify(jsonResult));
		return;
	}
	// check if date is unix format if yes send response 
	if(mUnix.isValid()){
		jsonResult.unix = mUnix.format('x');
		jsonResult.natural = mUnix.format('MMMM DD, YYYY');
		res.send(JSON.stringify(jsonResult));
		return;
  }
});
        
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
