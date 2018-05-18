//modules
var request		= require('request'),
		rp				= require('request-promise'),
		socketMVC	= require('socket.mvc'),
		db				= require('../models');


module.exports = {
	//Add Investor
	addInvestor: function (investorData) {
		db.investors.create(investorData)
			.then(function (investorDataCreateResult) {
				console.log("console.log.investorDataCreateResult: ",investorDataCreateResult);
			});
		}, // end addInvestor

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
	// }, // end getInvestors
	apiGetInvestors: function (req,res) {
		console.log("In apiGetInvestors");
		db.investors.findAll({}).then( function(result) {
			// CREATE Object format	for datatables
			var investorlist = {data:[]};
			// Loop through data assigning values to new obj
			for (var i in result) {
				investorlist.data[i] = [
					result[i].investor_id,
					result[i].investor_name,
					result[i].investor_type,
					result[i].investor_cost,
					result[i].investor_operator,
				]; //end investorlist.data
			} // end for loop

			// Testing
			console.log("console.log.investorlist:",investorlist);

			// Send Back formatted object
			res.header('Content-type','application/json');
			res.header('Charset','utf8');
			res.jsonp(investorlist);

	}); //end db.investors.findAll
} // end apiGetInvestors

};// end Module Exports
