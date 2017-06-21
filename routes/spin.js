var express = require('express');
var moment = require('moment');
var router = express.Router();


//lo he hecho aqui porque me ha dao palo hacer el controller. 


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
var spins= 10;
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var now = moment.utc().add(30, 'm');
    res.send(JSON.stringify(
    	{
            freespinLeft:(spins==0 ? 0 : spins--),
            nextFree:{  
              date: now.format(),
              timezone_type:3,
              timezone:"Europe\/Madrid"
           },
           prize:{  
              id: getRandomInt(1, 14),
              prev:getRandomInt(1, 15),//si, esta hecho pa dar un numero que no existe
              next:getRandomInt(1, 14),
           }
}
    	));
});

module.exports = router;