// configs/routes.js

//Load Modules
var civicService = require("../services/civicService.js");
///Load CoinsService API Object
var coinDataService = require("../services/coinDataService.js");

module.exports = function(app,passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('login'); // load the index file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
      //console.log("req:",req);
        // render the page and pass in any flash data if it exists
        //var flashMessage = req.flash('loginMessage');
        var flashLoginMessage = "test";
        res.render('login', { message: flashLoginMessage });
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // PROCESS TOKEN =======================
    // =====================================
    app.post('/api/civic', function(req, res) {
      var jwtToken = req.body.aToken;
      console.log("FILE:routes.js VAR:jwtToken FUN: app.post\n",jwtToken)
      civicService.processToken(jwtToken);
        res.send({redirect: '/dashboard'});

    });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
   // app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        //var flashMessage = req.flash('signupMessage');
       // var flashSignupMessage = "test";
       // res.render('signup', { message: flashSignupMessage });
    //});

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    // app.get('/profile', isLoggedIn, function(req, res) {
    //     // res.render('profile', {
    //     //     user : req.user // get the user out of session and pass to template
    //     // });
    //     res.render('profile'); // load the index file
    // });
    app.get('/dashboard', function(req, res) {
        res.render('dashboard'); // load the index file
    });
    app.get('/admin', function(req, res) {
        res.render('admin'); // load the index file
    });
    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        //req.logout();
        res.redirect('/login');
    });

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



}




    // // =====================================
    // // GET Request for Coin Market Cap ====
    // // =====================================
    // app.get('/api/coindata', function(req, res) {

    // var coinRequest = JSON.parse(coinMarket.responseText);

    // )};
    //     res.render('index'); // load the index file
