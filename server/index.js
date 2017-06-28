// Importing the modules we need
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
// Connecting to the DB
mongoose.connect('mongodb://localhost:27017/project');
var regex1= RegExp("search_comic")

// mongoose.Promise = global.Promise;

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(bodyParser.json({limit:'50mb'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(expressJWT({secret: 'injila'}).unless({path: ['/api/v1/searchusers',regex1]}))
routes = require('./routes/route')
app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Start the server
app.listen(port);
console.log('Insert getat on port ' + port);
