//APIs to connect to:
var request = require('request');
var rp = require('request-promise');
var socketMVC = require('socket.mvc');



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
                var currencyData = {
                    'symbol': priceData.data.symbol,
                    'price': priceData.data.quotes.USD.price
                };
								currencyData = {
                    "id": 2616,
                    "name": "Stipend",
                    "symbol": "SPD",
                    "website_slug": "stipend"
                };
                //res.send(ladaData);
                /*Login logic*/
                socketMVC.emit('coinResponse',ladaData);
            })
            .catch(function (err) {
                // API call failed...
                console.log(err);
            });
    }, // end getData


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
