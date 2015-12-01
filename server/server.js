// server.js

var express		= require('express'); 
var app			= express(); 
var bodyParser	= require('body-parser'); 
var port 		= process.env.PORT || 6666; 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

// middleware to allow ember to connect to server
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // allow ember to connect server
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

// set the static files location 
// app.use(express.static(__dirname + '/client'));

require('./routes')(app); // configure our routes

// Start the server
app.listen(port, function() {
	console.log("Server running @ loclhost:", port); 
});
