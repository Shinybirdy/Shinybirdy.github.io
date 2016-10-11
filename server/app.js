var express = require("express");
var app = express();
var path = require("path");
var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));


//app.use("/", routes);
//app.use("/users", users );
// ^^The first parameter is the path, the second one is the function to execute.
//We separate the routes from the app.js because we don't want our app to be one big mess.
//Separating files in Node makes use of module.exports.

app.get('/', function(req,res, next){
  console.log('in base url---sweeeeeet');
  res.sendFile( path.resolve( './public/views/index.html' ));
});



//serves static files in public folder

app.use(express.static(path.join(__dirname, 'public')));
//var index = require('./routes/index');
// var masterSchedule = require("./routes/master_schedule");
// var register = require('./routes/register');
// var studentRoute = require("./routes/studentRoute");
// //var topSecret = require('./routes/topsecret');
// var user = require("./routes/user");
//var ingredients = require("/routes/ingredients");

//app.use('/ingredients', ingredients);
// app.use('/nutrition', nutrition);
// app.use('/processing', processing);
// app.use('/production', production);
// app.use('/storage', storage);

app.listen( 3000 , function(){
  console.log("Mama is listening on 3000...");
});
