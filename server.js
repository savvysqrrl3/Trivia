path = require('path');
var express =require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));
app.use(session({
    secret: 'sqrrlWrks',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(5000, function() {
    console.log("listening on port 5000");
})