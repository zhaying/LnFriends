//modules
var request		= require('request'),
		rp				= require('request-promise'),
		socketMVC	= require('socket.mvc'),
		db				= require('../models');


module.exports = {

	//Add mining_pool
	addMining_pool: function (mining_poolData) {
		db.mining_pools.create(mining_poolData)
			.then(function (mining_poolDataCreateResult) {
				console.log("console.log.mining_poolDataCreateResult: ",mining_poolDataCreateResult);
			});
		}, // end addmining_pool

		apiGetMining_pools: function (req,res) {
			console.log("In apiGetMining_pools");
			db.mining_pools.findAll({}).then( function(result) {
				// CREATE Object format	for datatables
				var mining_pool_list = {data:[]};
				// Loop through data assigning values to new obj
				for (var i in result) {
					mining_pool_list.data[i] = [
						result[i].mining_pool_id,
						result[i].mining_pool_name,
						result[i].mining_pool_type,
						result[i].mining_pool_cost,
						result[i].mining_pool_operator,
					]; //end mining_pool_list.data
				} // end for loop

				// Testing
				console.log("console.log.mining_pool_list:",mining_pool_list);

				// Send Back formatted object
				res.header('Content-type','application/json');
				res.header('Charset','utf8');
				res.jsonp(mining_pool_list);

		}); //end db.mining_pools.findAll
	} // end apiGetMining_pools


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
