var express = require('express');
var router = express.Router();
var fs = require('fs');

var bp = require('body-parser');
const bodyParser = bp.urlencoded({ extended: false }); // Used to parse client data

router.post('/', bodyParser, function (req, res, next) {
	req = req.body;
	console.log(req);

	fs.writeFile("./records/" + req.user, JSON.stringify(req)); // Writes data in the txt file

	// TODO:
	res.sendStatus(200);
});

module.exports = router;
