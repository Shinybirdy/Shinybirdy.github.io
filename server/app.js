var express = require("express");
var app = express();
var path = require("path");
var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static (__dirname + "/public"));

//=============================================================
//SET PORT
var port = process.env.PORT || 3000;

// ROUTES FOR API
// ============================================================
var router = express.Router(); //gets instance of express router
router.get('/', function(req,res){
  res.json({message:"hello!"});
});

// MORE ROUTES TO GO HERE

// ==============================================================
// REGISTER ROUTES
app.use('/api', router);


// app.get('/', function(req,res){
//   console.log('in base url---sweeeeeet');
// res.sendFile(path.resolve("/"));
// 
// });

//app.set('views', path.join(__dirname, 'views'));
//serves static files in public folder

//========================================================
// START THE SERVER
app.listen(port);
console.log("Mama is listening on 3000...");
