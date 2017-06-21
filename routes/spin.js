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
            freeSpinLeft:(spins==0 ? 0 : spins--),
            nextFree:{  
              date: now.format(),
              timezone_type:3,
              timezone:"Europe\/Madrid"
           },
           prize:{  //si, en estos randoms hay un numero que no lo tenemos en la lista. Para lidiar con el error.
              id: getRandomInt(1, 16),
              prev:getRandomInt(1, 16),
              next:getRandomInt(1, 16),
           }
}
    	));
});

module.exports = router;