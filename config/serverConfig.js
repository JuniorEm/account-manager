var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

/* Parse the body for all incoming requests */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/* Load everything into app (use only 'app' for cwd) */
consign()
    .include('app')
    .into(app);

module.exports = app;
