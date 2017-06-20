var express = require('express');
var router = express.Router();
var jsf = require('json-schema-faker');

var REMOTE_REF = 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json';

var schema = {
  $ref: REMOTE_REF
};

jsf.resolve(schema).then(function(result) {
  console.log(JSON.stringify(result, null, 2));
});
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
    	{
	    data: [
	                {
	                    id: 11,
	                    name: "50 eXP",
	                    img: "/img/50exp.png?v=3"
	                },
	                {
	                    id: 1,
	                    name: "100 eXP",
	                    img: "/img/100exp.png?v=3"
	                },
	                {
	                    id: 2,
	                    name: "200 eXP",
	                    img: "/img/200exp.png?v=3"
	                },
	                {
	                    id: 3,
	                    name: "Pack eDraw Tickets x10",
	                    img: "/img/10t.png?v=3"
	                },
	                {
	                    id: 4,
	                    name: "Pack eDraw Tickets x20",
	                    img: "/img/20t.png?v=3"
	                },
	                {
	                    id: 5,
	                    name: "Pack eDraw Tickets x30",
	                    img: "/img/30t.png?v=3"
	                },
	                {
	                    id: 6,
	                    name: "Pack eDraw Tickets x500",
	                    img: "/img/500t.png?v=3"
	                },
	                {
	                    id: 7,
	                    name: "Premium 30 days",
	                    img: "/img/premium30.png?v=3"
	                },
	                {
	                    id: 9,
	                    name: "Steam Random Key",
	                    img: "/img/steamrandomkey.png?v=3"
	                },
	                {
	                    id: 10,
	                    name: "Paysafecard 10€",
	                    img: "/img/paysafe10.png?v=3"
	                },
	                {
	                    id: 25,
	                    name: "Pack eDraw Tickets x10000",
	                    img: "/img/10ktickss.png?v=3"
	                }
	                            ]
}
    	));
});

module.exports = router;