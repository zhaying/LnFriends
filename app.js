// app.js

// Get all modules
var express       = require("express");
var path          = require('path');
var socketMVC     = require('socket.mvc');
var cookieParser  = require('cookie-parser');
var bodyParser    = require("body-parser");
var session       = require('express-session');
var dotenv        = require('dotenv');
var exphbs        = require("express-handlebars");
var morgan        = require('morgan');
var passport      = require('passport');
var flash         = require('connect-flash');
var db            = require('./models');

// Get all custom modules

// Use environment variables
dotenv.load();
//dotenv.config();

// Load passport configs
require('./configs/passport')(passport); // pass passport for configuration
// Web Server settings
var PORT         = process.env.PORT || 3000;
var THE_HOSTNAME = process.env.THE_HOSTNAME || "0.0.0.0";
var app = express();

app.use(express.static("public")); // Serve static content for the app
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
//app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms
app.use(bodyParser.json()); // parse application/json


// Views template handler
app.engine('handlebars', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: [
    //  path to your partials
    __dirname + '/views/partials',
    ]
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Passport stuff
app.use(session({ // session secret
  secret: 'superSecretSecretSecrets',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Import routes and give the server access to them.
var routes = require("./configs/routes.js")(app,passport);
//app.use(routes);
app.use(flash()); // use connect-flash for flash messages stored in session
db.sequelize.sync().then(function(){
  var server = app.listen(PORT, THE_HOSTNAME, function() {
    console.log("App now listening at http://" + THE_HOSTNAME + ":" + PORT);
  });
  //Set socket.io configuration here
  var io = require('socket.io').listen(server);
  io.sockets.on('connection', function (socket) {
      socketMVC.init(io, socket, {
          debug: true,
          filePath: ['./configs/socket.js']
      });
  });
});
