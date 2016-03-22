'use strict';

var path = process.cwd();
var RequestHandler = require(path + '/app/controllers/requestHandler.server.js');

module.exports = function (app) {
	var requestHandler = new RequestHandler();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/:query')
		.get(requestHandler.generateResult);

};
