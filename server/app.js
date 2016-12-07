var express = require("express");
var app = express();
var path = require("path");
// var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static (__dirname + "/public"));
// app.use('/static', express.static(path.join(__dirname, 'public')));
//=============================================================
//SET PORT
var port = process.env.PORT || 3000;

// ROUTES FOR API
// ============================================================
app.get('/*', function(req,res){
  var file = req.params[0] || "index.html";
  res.sendFile(path.join(__dirname, "./public", file));
  console.log((path.join(__dirname, "./public", file)));
  // res.send("hey, home");
});
// home page route (http://localhost:8080)

// about page route (http://localhost:8080/about)
app.get('/index', function(req, res) {
    res.send('im the home page!');
});

// apply the routes to our application
// app.use('/', app);


// MORE ROUTES TO GO HERE

// ==============================================================
// REGISTER ROUTES
// app.use('/api', router);


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
