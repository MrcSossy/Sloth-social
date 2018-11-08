var express = require('express');
var router = express.Router();
var fs = require('fs');

var bp = require('body-parser');
const bodyParser = bp.urlencoded({ extended: false }); // Used to parse client data

router.post('/', bodyParser, function (req, res, next) {
	req = req.body;

	if (fs.existsSync('./records/' + req.user + '.txt')) {
		console.log('Found file');
		res.sendStatus(200);
	} else {
		res.sendStatus(202);
	}
});

module.exports = router;
