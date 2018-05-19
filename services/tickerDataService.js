//modules
var request		= require('request'),
		rp				= require('request-promise'),
		socketMVC	= require('socket.mvc'),
		db				= require('../models');


module.exports = {

	//Add wallet
	addWallet: function (walletData) {
		db.wallets.create(walletData)
			.then(function (walletDataCreateResult) {
				console.log("console.log.walletDataCreateResult: ",walletDataCreateResult);
			});
		}, // end addwallet

		apiGetDashboardList: function (req,res) {
			console.log("In apiGetDashboardList");
			db.tickers.findAll({}).then( function(result) {
				console.log(result);
				// CREATE Object format	for datatables
				var tickerlist = {data:[]};
				// Loop through data assigning values to new obj
				for (var i in result) {
					tickerlist.data[i] = [
						result[i].currency_name,
						result[i].currency_symbol,
						result[i].currency_price
					//	currency_price
					]; //end walletlist.data
				} // end for loop

				// Testing
				console.log("console.log.walletlist:",tickerlist);

				// Send Back formatted object
				res.header('Content-type','application/json');
				res.header('Charset','utf8');
				res.jsonp(tickerlist);

		}); //end db.wallets.findAll
	} // end apiGetWallets

};// end Module Exports
