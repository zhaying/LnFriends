//modules
var request		= require('request'),
		rp				= require('request-promise'),
		socketMVC	= require('socket.mvc'),
		db				= require('../models');


module.exports = {
	//Add Rig
	addRig: function (rigData) {
		db.rigs.create(rigData)
			.then(function (rigDataCreateResult) {
				console.log("console.log.rigDataCreateResult: ",rigDataCreateResult);
			});
		}, // end addRig
	//Get all Rigs
	getRigs: function () {
		db.rigs.findAll({}).then( function(result) {
		//	console.log("console.log.findALL result:",result[0].dataValues);
		//	console.log("console.log.result.id:",result[0].id);
		var riglist = {rigs:{}};
		//	var riglist = {rigs: {} };
		for (var i in result) {
			var key =  "rig" + result[i].id;
			riglist.rigs[key] = {
				"rig_id": result[i].rig_id,
				"rig_name": result[i].rig_name,
				"rig_type":	 result[i].rig_type,
				"rig_cost":	 result[i].rig_cost,
				"rig_operator":	 result[i].rig_operator,
			}; //end riglist.rigs[key]

		//console.log("console.log.riglist:",riglist);

		} // end for loop

		//Testing
		console.log("console.log.list",riglist);

		// Send the data over websockets
		socketMVC.emit('rigDataServiceResponse',riglist);
		});
	}// end getRigs

};// end Module Exports
