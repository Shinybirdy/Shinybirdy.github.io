var express = require("express");
var app = express();
var path = require("path");

var bodyParser = require("body-parser");

app.get('/', function(req,res){
  console.log('in base url---sweeeeeet');
  res.sendFile( path.resolve( 'views/index.html' ));
});

app.listen( 3000 );
