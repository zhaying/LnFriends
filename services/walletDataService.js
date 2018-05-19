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

		apiGetWallets: function (req,res) {
			console.log("In apiGetWallets");
			db.wallets.findAll({}).then( function(result) {
				// CREATE Object format	for datatables
				var walletlist = {data:[]};
				// Loop through data assigning values to new obj
				for (var i in result) {
					walletlist.data[i] = [
						result[i].wallet_address,
						result[i].wallet_symbol,
					]; //end walletlist.data
				} // end for loop

				// Testing
				console.log("console.log.walletlist:",walletlist);

				// Send Back formatted object
				res.header('Content-type','application/json');
				res.header('Charset','utf8');
				res.jsonp(walletlist);

		}); //end db.wallets.findAll
	} // end apiGetWallets

};// end Module Exports
