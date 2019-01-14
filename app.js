var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb://localhost/mongoblog',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection Error:'));
db.once('open', function(){
	console.log('MongoDB Connected');
});

var routes = require('./routes/index');
var blogs = require('./routes/blogs');

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);
app.use('/api/v1/blog', blogs);

app.listen(3000, function(){
	console.log("Server running on port 3000...");
});
