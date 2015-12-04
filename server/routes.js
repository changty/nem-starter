var mongoose 	= require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/nem-starter');

var Note = require('./models/note');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('moi');
	});	

	app.get('/note', function(req, res) {
		Note.find({}, function(err, notes) {
			if(err) {
				res.send(err);
			}
			else {
				res.send({message: 'found something', data: notes}); 
			}
		})
	});
};