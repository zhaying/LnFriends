//modules
var request		= require('request'),
		rp				= require('request-promise'),
		socketMVC	= require('socket.mvc'),
		db				= require('../models');


module.exports = {

	//Add Investor
	addInvestor: function (investorData) {
		db.users.create(investorData)
			.then(function (investorDataCreateResult) {
				console.log("console.log.investorDataCreateResult: ",investorDataCreateResult);
			});
		}, // end addInvestor

		apiGetInvestors: function (req,res) {
			console.log("In apiGetInvestors");
			db.users.findAll({}).then( function(result) {
				//console.log("apiGetInvestors: console.log.result",result);
				// CREATE Object format	for datatables
				var investorlist = {data:[]};
				// Loop through data assigning values to new obj
				//
				for (var i in result) {
					investorlist.data[i] = [
						result[i].user_id,
						result[i].user_name,
						result[i].last_name,
						result[i].first_name,
						result[i].company_name,
						result[i].phone,
						result[i].user_type,
						result[i].updatedAt,
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
