// configs/routes.js

//Load Modules
var civicService = require("../services/civicService.js");
///Load CoinsService API Object
var coinDataService = require("../services/coinDataService.js");

var request = require('request');
var rp = require('request-promise');


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
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        //var flashMessage = req.flash('signupMessage');
        var flashSignupMessage = "test";
        res.render('signup', { message: flashSignupMessage });
    });

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
    app.get('/saDashboard', function(req, res) {
        res.render('saDashboard'); // load the index file
    });
    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        //req.logout();
        res.redirect('/');
    });


    app.get('/api/coindata', function(req, res) {
<<<<<<< HEAD
        var coinSymbol = "SPD";
        var coinUrl = "https://api.coinmarketcap.com/v2/ticker/2616/?convert=" +coinSymbol;
        //console.log(coinUrl);
        // var mydata = request(coinUrl);
        // var price = {"thedata": mydata };
        rp(coinUrl)
        .then(function (theStuff) {
          // Process html...

          var firstKey = theStuff;
          var myData = Object.keys(firstKey)[0];
          console.log("myData",myData);
          var myId = firstKey[Object.keys(firstKey)[0]].price;
console.log("myId",myId);
          //console.log("data:", obj.toJSON());
          res.send(myId);
        })
        .catch(function (err) {
          // Crawling failed...
          console.log(err);
        });


      //var data = price.data;
    // req.pipe(price);
    // price.pipe(result);
=======
>>>>>>> 2f136382f4af4800e14602c4f26f3d3c36f939ca



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
