var express = require("express");
var app = express();
var path = require("path");
var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//serves static files in public folder
app.use(express.static("public"));

app.get('/', function(req,res){
  console.log('in base url---sweeeeeet');
res.sendFile(path.resolve('public/views/index.html'));

});

//app.set('views', path.join(__dirname, 'views'));

app.listen( 3000 , function(){
  console.log("Mama is listening on 3000...");
});
//app.use("/", routes);
//app.use("/users", users );
// ^^The first parameter is the path, the second one is the function to execute.
//We separate the routes from the app.js because we don't want our app to be one big mess.
//Separating files in Node makes use of module.exports.
