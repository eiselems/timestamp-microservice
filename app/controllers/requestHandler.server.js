'use strict';
var moment = require("moment");

function RequestHandler () {

	var format = "MMMM Do, YYYY";
	var formatAlt = "MMMM D, YYYY";
	var formatTimeStamp = "X"	
	var formats = [format, formatAlt, formatTimeStamp];
	
	this.generateResult = function (req, res) {
		let query = req.params.query;
		
		let timestamp;
		let naturalDate;
		
		var mom = moment(query, formats);
			if (mom.isValid()){
				naturalDate = mom.format(format);
				timestamp = mom.format("X");	
			}else{
				naturalDate = null;
				timestamp = null;
			}
		
		res.json({'unix': timestamp, 'natural': naturalDate});

	};

}

module.exports = RequestHandler;
