var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
	var read = [];

	fs.readdir('records', function (err, files) {
		for (const file in files) {
			fs.readFile("records/" + files[file], function (err, data) { // Reads data from the txt file
				user = JSON.parse(data);
				user.pass = undefined;
				user.id = file;

				console.log(user);

				read.push(user); // Sends the read data
			});
		}

		res.send(read);
	});
});

module.exports = router;
