// configs/routes.js

//Load Modules
var civicService  = require("../services/civicService.js");
var checkAuth     = require("../middleware/check-auth.js");
var request       = require('request');
var rp            = require('request-promise');
var db            = require('../models');

//Load custom Services
var coinDataService       = require("../services/coinDataService.js"),
    rigDataService        = require("../services/rigDataService.js"),
    investorDataService   = require("../services/investorDataService.js"),
    walletDataService     = require("../services/walletDataService.js"),
    tickerDataService     = require("../services/tickerDataService.js"),
    miningPoolDataService = require("../services/miningPoolDataService.js");

module.exports = function(app,passport) {

    // =====================================
    // UI -- HOME PAGE (with login links)
    // =====================================
    app.get('/', function(req, res) {
        res.render('login', {message: 'flashLoginMessage', layout:'login' });
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
        res.render('login', {message: 'flashLoginMessage', layout:'login' });
    });



    // =====================================
    // UI -- DASHBOARDS
    // =====================================

    app.get('/dashboard', checkAuth, function(req, res) {
        res.render('dashboard'); // load the index file
    });
    app.get('/rigs', checkAuth, function(req, res) {
        res.render('rigs',{title:'CoinLada | Rigs', layout:'main'}); // load the index file
    });
    app.get('/wallets', checkAuth, function(req, res) {
        res.render('wallets',{title:'CoinLada | Wallets', layout:'main'}); // load the index file
    });

    app.get('/investors', checkAuth, function(req, res) {
        res.render('investors',{title:'CoinLada | Investors', layout:'main'}); // load the index file
    });

    app.get('/miningPools', checkAuth, function(req, res) {
        res.render('miningPools',{title:'CoinLada | MiningPools', layout:'main'}); // load the index file
    });

    app.get('/sa', checkAuth, function(req, res) {
        res.render('sa', {title:'CoinLada | Dashboard', layout:'saMain'} ); // load the index file
    });


    // =====================================
    // UI -- LOGOUT
    // =====================================
    app.get('/logout', function(req, res) {
      req.session.destroy(function(){
        console.log("user logged out.")
      });
      res.redirect('/login');
        //req.logout();
        //res.redirect('/login');
    });

    // =====================================
    // PROCESS TOKEN =======================
    // =====================================
    app.post('/api/civic', checkAuth, function(req, res) {
      var jwtToken = req.body.aToken;
      console.log("FILE:routes.js VAR:jwtToken FUN: app.post\n",jwtToken)
    //  civicService.processToken(jwtToken);
        res.send({redirect: '/dashboard'});

    });

    // =====================================
    // API -- GET THE CURRENCIES
    // =====================================
    app.post('/api/get_the_currencies', function(req, res) {

        coinDataService.getTheCurrencies(req,res);

    }); //end get_the_currencies
    // =====================================
    // API -- DATATABLES JSONP ROUTES
    // =====================================
    app.get('/api/getRigList/', function(req, res) {

         rigDataService.apiGetRigs(req,res);
    }); //end get api getRigList

    app.get('/api/getInvestorList/', function(req, res) {
          console.log("In getInvestorList");
         investorDataService.apiGetInvestors(req,res);
    }); //end get api getInvestorList

    app.get('/api/getWalletList/', function(req, res) {
          console.log("In getWalletList");
         walletDataService.apiGetWallets(req,res);
    }); //end get api getInvestorList

    app.get('/api/getMiningPoolList/', function(req, res) {
          console.log("In getMiningPoolList");
         miningPoolDataService.apiGetMiningPools(req,res);
    }); //end get api getInvestorList

    app.get('/api/getDashboardList/', function(req, res) {
          console.log("In getMiningPoolList");
         tickerDataService.apiGetDashboardList(req,res);
    }); //end get api getInvestorList



    // =====================================
    // API -- COIN DATA
    // =====================================
    //Coin Data
    app.get('/api/coindata', function(req, res) {
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

    }); //end get api coindata

    app.post('/api/coindata', function(req, res) {

      coinDataService.getData(req,res);

    }); //end post api coindata

    //////JP----* TheBSODPool *****
    app.get('/api/cointotal', function(req, res) {
        var totalSymbol = "SPD";
        var totalnUrl = "http://api.bsod.pw/api/walletEx?address=" + wallet + "STLmMKJSH7GLGhxcY6tj52VRfaJk4ppHSW";
        //console.log(coinUrl);""
        // var mydata = request(coinUrl);
        // var price = {"thedata": mydata };
        rp(totalUrl)
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

    }); //end get api cointotal

    app.post('/api/cointotal', function(req, res) {
      coinTotal.getData(req,res);

    });
    // =====================================
    // DB -- CRUD
    // =====================================
    app.get('/api/currencies/', function(req,res){
      db.currencies.findAll({}).then( function(result) {
        console.log(result);
        res.json(result);
      });

    });
    app.post('/api/currencies/new/', function(req, res){
      db.currencies.create({
        currencies_id: '2616',
        name:"Stipend",
        symbol: 'SPD',
      }).then(function(result){
        console.log(result);
        res.json(result);
      });

    });
    // =====================================
    // MISC -- OTHER STUFF
    // =====================================
      // route middleware to make sure a user is logged in
      function isLoggedIn(req, res, next) {

          // if user is authenticated in the session, carry on
          if (req.isAuthenticated())
              return next();

          // if they aren't redirect them to the home page
          res.redirect('/');

      } //end isLoggedIn
}; // end Module export
