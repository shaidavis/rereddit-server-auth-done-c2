var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect(process.env."mongodb://heroku_43mth391:7r9bp705te29hs12crir9i1np2@ds019936.mlab.com:19936/heroku_43mth391" || 'mongodb://localhost/rereddit');

var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();

console.log("***SERVER IS RUNNING***")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('models'));

app.use('/', routes);
app.use('/users', users); 

var port = process.env.PORT || '4000';

app.listen(port);
