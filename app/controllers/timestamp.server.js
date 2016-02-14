'use strict';

var moment = require("moment");

function TimeStampHandler () {

	this.parse = function (req, res) {
		var strDate = req.params.date;
		var parsedDate = moment.utc(strDate).isValid() ? 
							moment.utc(strDate) : moment.utc(parseInt(strDate*1000));
		if (parsedDate.isValid()) {
			var unix = parsedDate.format("X");
			var natural = parsedDate.format("MMMM D, YYYY");
			res.json({
				unix: unix,
				natural: natural
			});
		}
		else {
			parsedDate = moment.utc(parseInt(strDate));
			res.json({
				unix: null,
				natural: null
			});
		}
	};

}

module.exports = TimeStampHandler;
