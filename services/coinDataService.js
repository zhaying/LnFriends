//APIs to connect to:
var request = require('request');
var rp = require('request-promise');
var socketMVC = require('socket.mvc');
var db            = require('../models');


module.exports = {
	getListings: function () {
		coinUrl = 'https://api.coinmarketcap.com/v2/listings/';
		console.log("coinUrl:",coinUrl);
		var options = {
			uri: coinUrl,
			headers: { 'User-Agent': 'Request-Promise'},
			json: true // Automatically parses the JSON string in the response
		};

		rp(options)
				.then(function (allActiveCoins) {
						console.log('allActiveCoins', allActiveCoins);
						var ladaListingData = {'data': allActiveCoins.data};
						console.log('ladaListingData:',ladaListingData);
				})
				.catch(function (err) {
						// API call failed...
						console.log(err);
				});

	}, // end getListings
	getData: function (req,res) {
		var coinSymbol = req.body.coinSymbol;
		var coinID = req.body.coinID;
		coinUrl = 'https://api.coinmarketcap.com/v2/ticker/' +coinID+ '/?convert=' +coinSymbol;
		console.log("coinUrl:",coinUrl);
		var options = {
			uri: coinUrl,
			headers: { 'User-Agent': 'Request-Promise'},
			json: true // Automatically parses the JSON string in the response
		};

		rp(options)
				.then(function (priceData) {
						console.log('priceData', priceData);
						var ladaData = {'price': priceData.data.quotes.USD.price};
						res.send(ladaData);
				})
				.catch(function (err) {
						// API call failed...
						console.log(err);
				});

	}, // end getData

    getTheCurrencies: function () {
        var currenciesUrl = 'https://api.coinmarketcap.com/v2/listings/';
        console.log("currenciesUrl:",currenciesUrl);
        var options = {
            uri:        currenciesUrl,
            headers:    { 'User-Agent': 'Request-Promise'},
            json:       true // Automatically parses the JSON string in the response
        };

        rp(options)
            .then(function (currenciesData) {
                console.log('currenciesData:', currenciesData);

                for (var i in currenciesData.data) {
                    var mydata = currenciesData.data[i];
                    console.log('mydata:', mydata);

                    var currencyData = {
                        "currency_id": mydata.id,
                        "currency_symbol": mydata.symbol,
                        "currency_name": mydata.name

                    };

                    db.currencies.create(currencyData)
                        .then(function (result) {
                            console.log(result);
                            //res.json(result);
                        });
                }
            })
            .catch(function (err) {
                // API call failed...
                console.log(err);
            });
    }, // end getData


    getLatestPrice: function (data) {
        console.log("console.log.data=",data);
        db.currencies.findOne({ where: {currency_symbol: data.currency_symbol} }).then(result => {
            console.log("console.log.CURRENCY: ", result.currency_name + " "+result.currency_id +" "+ result.currency_symbol);
						// GET THE CURRENT PRICE
						var my_url  =   "https://api.coinmarketcap.com/v2/ticker/" + result.currency_id + "/?convert=USD";
		           var options = { 	uri: my_url,
		                   					headers: { 'User-Agent': 'Request-Promise'},
		                   					json: true // Automatically parses the JSON string in the response
							 };
		           rp(options)
		               .then(function (priceData) {
		                   console.log('console.log.priceData', priceData);
											 console.log('console.log.price', priceData.data.quotes.USD.price);
											 var tickerData = {
												 currency_id: priceData.data.id,
												 currency_name: priceData.data.name,
												 currency_symbol: priceData.data.symbol,
												 currency_price: priceData.data.quotes.USD.price
											 };
											 db.tickers.destroy({ where: {currency_symbol: tickerData.currency_symbol} });
											 db.tickers.create(tickerData)
	                         .then(function (tickerResults) {
	                             console.log("console.log.tickerResults",tickerResults);
	                         }); //end db.tickers.create then
		                   //console.log('priceData', "WE HAVE A RESULT");
		                   //socketMVC.emit('coinResponse',ladaData);
		               }) //end rp then
		               .catch(function (err) {
		                   // API call failed...
		                   console.log(err);
		               }); //end rp catch


        }); //end db.currencies.findOne

    }, // end getLatestPrice
	  getMiningPoolTotal: function (data) {
				console.log("console.log.data=",data);
				db.wallets.findOne({ where: {wallet_address: data.wallet_address} }).then(result => {
					var result = {
							wallet_address: "STLmMKJSH7GLGhxcY6tj52VRfaJk4ppHSW"
					};
						console.log("console.log.wallet_address: ", result.wallet_address );
						// GET THE TOTAL COINS FOR A WALLET
						//http://api.bsod.pw/api/walletEx?address=STLmMKJSH7GLGhxcY6tj52VRfaJk4ppHSW
						var my_url  =   "http://api.bsod.pw/api/walletEx?address=" + result.wallet_address;
							 var options = { 	uri: my_url,
																headers: { 'User-Agent': 'Request-Promise'},
																json: true // Automatically parses the JSON string in the response
							 };
							 rp(options)
									 .then(function (miningPoolWalletTotal) {
										 var miningPoolWalletTotal = {"data": miningPoolWalletTotal};
											 console.log('console.log.miningPoolWalletTotal', miningPoolWalletTotal);
											 console.log('console.log.total', miningPoolWalletTotal.data.quotes.USD.price);
											 var miningpoolData = {
												 miningpool_symbol: miningPoolWalletTotal.data.currency,
												 miningpool_currency_total: miningPoolWalletTotal.data.total
											 };
											 console.log(miningpoolData);
											 //db.miningpools.destroy({ where: {miningpool_symbol: tickerData.miningpool_symbol,} });
											 // db.miningpools.create(tickerData)
												// 	 .then(function (tickerResults) {
												// 			 console.log("console.log.tickerResults",tickerResults);
												// 	 }); //end db.tickers.create then
											 //console.log('priceData', "WE HAVE A RESULT");
											 //socketMVC.emit('coinResponse',ladaData);
									 }) //end rp then
									 .catch(function (err) {
											 // API call failed...
											 console.log(err);
									 }); //end rp catch


				}); //end db.currencies.findOne

		}, // end getMiningPoolTotal
	getDataWithSocket: function (data) {
		var coinSymbol = data.coinSymbol;
		var coinID = data.coinID;
		coinUrl = 'https://api.coinmarketcap.com/v2/ticker/' +coinID+ '/?convert=' +coinSymbol;
		console.log("coinUrl:",coinUrl);
		var options = {
			uri: coinUrl,
			headers: { 'User-Agent': 'Request-Promise'},
			json: true // Automatically parses the JSON string in the response
		};

		rp(options)
				.then(function (priceData) {
						console.log('priceData', priceData);
						var ladaData = {
							'symbol': priceData.data.symbol,
							 'price': priceData.data.quotes.USD.price
						};
						//res.send(ladaData);
						/*Login logic*/
						socketMVC.emit('coinResponse',ladaData);
				})
				.catch(function (err) {
						// API call failed...
						console.log(err);
				});
	} // end getData
};

/* coinmarketcap *****
DOCS: https://coinmarketcap.com/api/
EXAMPLE DATA: https://api.coinmarketcap.com/v2/ticker/2616/?convert=SPD
*/

/* TheBSODPool *****
DOCS: https://bsod.pw/site/api
EXAMPLE DATA: http://api.bsod.pw/api/walletEx?address=STLmMKJSH7GLGhxcY6tj52VRfaJk4ppHSW
*/
