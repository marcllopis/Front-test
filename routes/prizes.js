var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
    	{
	    data: [
	                
	                {
	                    id: 1,
	                    name: "100 eXP",
	                    img: "/images/100exp.png?v=3"
	                },
	                {
	                    id: 2,
	                    name: "200 eXP",
	                    img: "/images/200exp.png?v=3"
	                },
	                {
	                    id: 3,
	                    name: "Pack eDraw Tickets x10",
	                    img: "/images/10t.png?v=3"
	                },
	                {
	                    id: 4,
	                    name: "Pack eDraw Tickets x20",
	                    img: "/images/20t.png?v=3"
	                },
	                {
	                    id: 5,
	                    name: "Pack eDraw Tickets x30",
	                    img: "/images/30t.png?v=3"
	                },
	                {
	                    id: 6,
	                    name: "Pack eDraw Tickets x500",
	                    img: "/images/500t.png?v=3",
	                    porcentaje:Math.random()
	                },
	                {
	                    id: 7,
	                    name: "Premium 30 days",
	                    img: "/images/premium30.png?v=3",
	                    porcentaje:Math.random()
	                },
	                {
	                    id: 9,
	                    name: "Steam Random Key",
	                    img: "/images/steamrandomkey.png?v=3",
	                    porcentaje:Math.random()
	                },
	                {
	                    id: 10,
	                    name: "Paysafecard 10€",
	                    img: "/images/paysafe10.png?v=3",
	                    porcentaje:Math.random()
	                },
	                {
	                    id: 11,
	                    name: "50 eXP",
	                    img: "/images/50exp.png?v=3",
	                    porcentaje:Math.random()
	                },
	                {
	                    id: 12,
	                    name: "Steam Random Key Premium",
	                    img: "/images/randomKeyPro.png?v=3",
	                    porcentaje:Math.random()
	                },
	                {
	                    id: 13,
	                    name: "Steam Prepaid Card 20",
	                    img: "/images/steam20.png?v=3",
	                    porcentaje:Math.random()
	                },
	                {
	                    id: 14,
	                    name: "Juego PC",
	                    img: "/images/juegospin.png?v=3",
	                    porcentaje:Math.random()
	                },
	                {
	                    id: 15,//Este juego no tiene imagen. 
	                    name: "Juego PC Premium",
	                    img: "/images/juegospinpremium.png?v=3",
	                    porcentaje:Math.random()
	                }
	                            ]
}
    	));
});

module.exports = router;