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

		apiGetMiningPools: function (req,res) {
			console.log("In apiGetMiningPools");
			db.mining_pools.findAll({}).then( function(result) {
				// CREATE Object format	for datatables
				var mining_pool_list = {data:[]};
				// Loop through data assigning values to new obj
				for (var i in result) {
					mining_pool_list.data[i] = [
						result[i].mining_pool_id,
						result[i].mining_pool_name,
						result[i].mining_pool_wallet_address,
						result[i].mining_pool_symbol,
						result[i].mining_pool_currency_quantity,
					]; //end mining_pool_list.data
				} // end for loop

				// Testing
				console.log("console.log.mining_pool_list:",mining_pool_list);

				// Send Back formatted object
				res.header('Content-type','application/json');
				res.header('Charset','utf8');
				res.jsonp(mining_pool_list);

		}); //end db.mining_pools.findAll
	}, // end apiGetMining_pools
	getListOfMiningPools: function () {
		db.mining_pools.findAll({}).then( function(result) {
		//Testing
		console.log("console.log.db.mining_pools.findAll",result);

		});
	}, // end getRigs

};// end Module Exports
