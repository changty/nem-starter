// server.js

var express		= require('express'); 
var app			= express(); 
var bodyParser		= require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

var port 		= process.env.PORT || 4444; 



// Routes for api 

var router = express.Router(); 

router.get('/', function(req, res) {
	response.json({message: 'hello world'}); 
}) ;



// Start the server
app.listen(port, function() {
	console.log("Server running @ loclhost:", port); 
});
