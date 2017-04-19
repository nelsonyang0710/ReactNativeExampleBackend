
var express    = require('express');
var app        = express();

var port = process.env.PORT || 8080;
var router = express.Router();
router.route('/customerInfo')
	.get(function (req, res) {
		res.json(
			{
				ShipTo: [
					{name: 'Nelson Yang', address: '666 Happy Dr, Happy City, CA 95128'},
					{name: 'Bruce Lee', address: '1234 KF Dr, Happy City, CA 95035'},
					{name: 'Kenneth Thompson', address: '8114 Grow Drive #9, Cape Neddick, ME 03902', type: 'primary'},
				],
				PayWith: [
					{name: 'BANK OF AMERICA CHECKING', number: 'x-5567', type: 'primary'},
					{name: 'Visa', number: 'x-4512'}
				],
				total: "28.98"
			}
		);
	});
app.use('/api', router);
app.listen(port);
console.log('node running')