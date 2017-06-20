var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
    	{
	    data: [
	                {
	                    id: 11,
	                    name: "50 eXP",
	                    img: "/img/50exp.png?v=3"
	                }
	                            ]
}
    	));
});

module.exports = router;