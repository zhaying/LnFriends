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
						result[i].wallet_id,
						result[i].wallet_name,
						result[i].wallet_type,
						result[i].wallet_cost,
						result[i].wallet_operator,
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


	//Get all Investors
	// getInvestors: function () {
	// 	db.investors.findAll({}).then( function(result) {
	// 	var investorlist = {investors:{}};
	// 	//	var riglist = {rigs: {} };
	// 	for (var i in result) {
	// 		var key =  "investor" + result[i].id;
	// 		investorlist.investors[key] = {
	// 			"investor_id": result[i].investor_id,
	// 			"investor_name": result[i].investor_name,
	// 			"investor_type":	 result[i].investor_type,
	// 			"investor_cost":	 result[i].investor_cost,
	// 			"investor_operator":	 result[i].investor_operator,
	// 		}; //end investorlist.investors[key]
	//
	// 	//console.log("console.log.investorlist:",investorlist);
	//
	// 	} // end for loop
	//
	// 	//Testing
	// 	console.log("console.log.list",investorlist);
	//
	// 	// Send the data over websockets
	// 	socketMVC.emit('investorDataServiceResponse',investorlist);
	// 	});
	// } // end getInvestors

};// end Module Exports
