// configs/routes.js

//Load Modules
var civicService = require("../services/civicService.js");
///Load CoinsService API Object
var coinDataService = require("../services/coinDataService.js");

module.exports = function(app,passport) {

    // =====================================
    // UI -- HOME PAGE (with login links)
    // =====================================
    app.get('/', function(req, res) {
        res.render('login'); // load the index file
    });

    // =====================================
    // UI -- LOGIN
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
      //console.log("req:",req);
        // render the page and pass in any flash data if it exists
        //var flashMessage = req.flash('loginMessage');
        var flashLoginMessage = "test";
        res.render('login', { message: flashLoginMessage });
    });

    // =====================================
    // UI -- DASHBOARDS
    // =====================================

    app.get('/dashboard', function(req, res) {
        res.render('dashboard'); // load the index file
    });

    app.get('/admin', function(req, res) {
        res.render('admin'); // load the index file
    });

    app.get('/sa', function(req, res) {
        res.render('saDashboard'); // load the index file
    });
    // =====================================
    // UI -- LOGOUT
    // =====================================
    app.get('/logout', function(req, res) {
        //req.logout();
        res.redirect('/login');
    });

    // =====================================
    // API -- PROCESS TOKEN
    // =====================================
    app.post('/api/civic', function(req, res) {
      var jwtToken = req.body.aToken;
      console.log("FILE:routes.js VAR:jwtToken FUN: app.post\n",jwtToken)
      civicService.processToken(jwtToken);
        res.send({redirect: '/dashboard'});

    });

    // =====================================
    // API -- COIN DATA
    // =====================================
    app.get('/api/coindata', function(req, res) {

    });

    app.post('/api/coindata', function(req, res) {

      coinDataService.getData(req,res);

    });

}; // end Module export

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');

} //end isLoggedIn
