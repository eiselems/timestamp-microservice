'use strict';
var moment = require("moment");

function RequestHandler () {

	var regExOnlyNumbers = /^[0-9]*$/;  
	//	var months = ["January", "February", "March", "April", "Mai", "June","July","August","September","October","November","December"];
	
	var format = "MMMM Do, YYYY";
	var formatAlt = "MMMM D, YYYY";
	
	var formats = [format, formatAlt];
	
	this.generateResult = function (req, res) {
		let query = req.params.query;
		//check if query consists of only numbers
		let timestamp;
		let naturalDate;
		if(regExOnlyNumbers.test(query)){
			timestamp = parseInt(query);
			var mom = moment.unix(timestamp);
			naturalDate = mom.format("MMMM Do, YYYY");
			//let temp = new Date(timestamp*1000);
			//naturalDate = months[temp.getMonth()] + ' ' + temp.getDate() + ', ' + temp.getFullYear();
		}else{
			//try to parse date
			var mom = moment(query, formats);
			if (mom.isValid()){
				naturalDate = query;
				timestamp = mom.format("X");	
			}else{
				naturalDate = null;
				timestamp = null;
			}
			
		}
		res.json({'unix': timestamp, 'natural': naturalDate});

	};

}

module.exports = RequestHandler;
