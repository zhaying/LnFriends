var express = require("express");
var bodyParser = require("body-parser");
var dotenv = require('dotenv');
dotenv.load();
var PORT = process.env.PORT || 3000;
var THE_HOSTNAME =  process.env.THE_HOSTNAME || "localhost";


var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/siteController.js");

app.use(routes);

app.listen(PORT, THE_HOSTNAME, function() {
  console.log("App now listening at http://" + THE_HOSTNAME + ":" + PORT);
});
