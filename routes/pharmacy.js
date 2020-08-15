var express = require('express');
var router = express.Router();
var Mphamacies = require('../Model/pharmacies.js');

var pharmacies=[
    {
      "name": "WALGREENS",
      "address": "3696 SW TOPEKA BLVD",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66611,
      "latitude": 39.001423,
      "longitude": -95.68695
    },
    {
      "name": "KMART PHARMACY   ",
      "address": "1740 SW WANAMAKER ROAD",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66604,
      "latitude": 39.03504,
      "longitude": -95.7587
    },
    {
      "name": "CONTINENTAL PHARMACY LLC",
      "address": "821 SW 6TH AVE",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66603,
      "latitude": 39.05433,
      "longitude": -95.68453
    },
    {
      "name": "STORMONT-VAIL RETAIL PHARMACY",
      "address": "2252 SW 10TH AVE.",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66604,
      "latitude": 39.05167,
      "longitude": -95.70534
    },
    {
      "name": "DILLON PHARMACY",
      "address": "2010 SE 29TH ST",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66605,
      "latitude": 39.016384,
      "longitude": -95.65065
    },
    {
      "name": "WAL-MART PHARMACY       ",
      "address": "1501 S.W. WANAMAKER ROAD",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66604,
      "latitude": 39.03955,
      "longitude": -95.76459
    },
    {
      "name": "KING PHARMACY",
      "address": "4033 SW 10TH AVE",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66604,
      "latitude": 39.05121,
      "longitude": -95.727
    },
    {
      "name": "HY-VEE PHARMACY      ",
      "address": "12122 STATE LINE RD",
      "city": "LEAWOOD",
      "state": "KS",
      "zip": 66209,
      "latitude": 38.907753,
      "longitude": -94.60801
    },
    {
      "name": "JAYHAWK PHARMACY AND PATIENT SUPPLY",
      "address": "2860 SW MISSION WOODS DR",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66614,
      "latitude": 39.015053,
      "longitude": -95.77866
    },
    {
      "name": "PRICE CHOPPER PHARMACY",
      "address": "3700 W 95TH ST",
      "city": "LEAWOOD",
      "state": "KS",
      "zip": 66206,
      "latitude": 38.95792,
      "longitude": -94.628815
    },
    {
      "name": "AUBURN PHARMACY",
      "address": "13351 MISSION RD",
      "city": "LEAWOOD",
      "state": "KS",
      "zip": 66209,
      "latitude": 38.885345,
      "longitude": -94.628
    },
    {
      "name": "CVS PHARMACY",
      "address": "5001 WEST 135 ST",
      "city": "LEAWOOD",
      "state": "KS",
      "zip": 66224,
      "latitude": 38.88323,
      "longitude": -94.64518
    },
    {
      "name": "SAMS PHARMACY       ",
      "address": "1401 SW WANAMAKER ROAD",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66604,
      "latitude": 39.041603,
      "longitude": -95.764626
    },
    {
      "name": "CVS PHARMACY",
      "address": "2835 SW WANAMAKER RD",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66614,
      "latitude": 39.015503,
      "longitude": -95.76434
    },
    {
      "name": "HY-VEE PHARMACY      ",
      "address": "2951 SW WANAMAKER RD",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66614,
      "latitude": 39.012157,
      "longitude": -95.76394
    },
    {
      "name": "TALLGRASS PHARMACY",
      "address": "601 SW CORPORATE VIEW",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66615,
      "latitude": 39.05716,
      "longitude": -95.76692
    },
    {
      "name": "HUNTERS RIDGE PHARMACY",
      "address": "3405 NW HUNTERS RIDGE TER STE 200",
      "city": "TOPEKA",
      "state": "KS",
      "zip": 66618,
      "latitude": 39.129845,
      "longitude": -95.712654
    },
    {
      "name": "ASSURED PHARMACY  ",
      "address": "11100 ASH ST STE 200",
      "city": "LEAWOOD",
      "state": "KS",
      "zip": 66211,
      "latitude": 38.926632,
      "longitude": -94.64744
    },
    {
      "name": "WALGREENS",
      "address": "4701 TOWN CENTER DR",
      "city": "LEAWOOD",
      "state": "KS",
      "zip": 66211,
      "latitude": 38.91619,
      "longitude": -94.640366
    },
    {
      "name": "PRICE CHOPPER PHARMACY",
      "address": "1100 SOUTH 7 HWY",
      "city": "BLUE SPRINGS",
      "state": "MO",
      "zip": 64015,
      "latitude": 39.02931,
      "longitude": -94.27175
    },
    {
      "name": "CVS PHARMACY",
      "address": "1901 WEST KANSAS STREET",
      "city": "LIBERTY",
      "state": "MO",
      "zip": 64068,
      "latitude": 39.24385,
      "longitude": -94.44961
    },
    {
      "name": "MARRS PHARMACY",
      "address": "205 RD MIZE ROAD",
      "city": "BLUE SPRINGS",
      "state": "MO",
      "zip": 64014,
      "latitude": 39.02353,
      "longitude": -94.260605
    },
    {
      "name": "WAL-MART PHARMACY       ",
      "address": "600 NE CORONADO DRIVE",
      "city": "BLUE SPRINGS",
      "state": "MO",
      "zip": 64014,
      "latitude": 39.024193,
      "longitude": -94.25503
    },
    {
      "name": "WAL-MART PHARMACY       ",
      "address": "10300 E HWY 350",
      "city": "RAYTOWN",
      "state": "MO",
      "zip": 64133,
      "latitude": 38.983765,
      "longitude": -94.459305
    },
    {
      "name": "HY-VEE PHARMACY      ",
      "address": "9400 E. 350 HIGHWAY",
      "city": "RAYTOWN",
      "state": "MO",
      "zip": 64133,
      "latitude": 38.993,
      "longitude": -94.47083
    },
    {
      "name": "HY-VEE PHARMACY      ",
      "address": "625 W 40 HWY",
      "city": "BLUE SPRINGS",
      "state": "MO",
      "zip": 64014,
      "latitude": 39.010704,
      "longitude": -94.27108
    },
    {
      "name": "HY-VEE PHARMACY      ",
      "address": "109 NORTH BLUE JAY DRIVE",
      "city": "LIBERTY",
      "state": "MO",
      "zip": 64068,
      "latitude": 39.245758,
      "longitude": -94.44702
    },
    {
      "name": "WALGREENS     ",
      "address": "1701 NW HIGHWAY 7",
      "city": "BLUE SPRINGS",
      "state": "MO",
      "zip": 64015,
      "latitude": 39.037548,
      "longitude": -94.27153
    },
    {
      "name": "WALGREENS     ",
      "address": "9300 E GREGORY BLVD",
      "city": "RAYTOWN",
      "state": "MO",
      "zip": 64133,
      "latitude": 38.995342,
      "longitude": -94.4734
    },
    {
      "name": "WALGREENS     ",
      "address": "1191 W KANSAS AVE",
      "city": "LIBERTY",
      "state": "MO",
      "zip": 64068,
      "latitude": 39.24387,
      "longitude": -94.441864
    }
   ];

// function to find distance between 2 latitude and longitude
function distance(lat1, lat2,  lon1, lon2) 
{ 
// Haversine formula  
var dlon = lon2 - lon1;  
var dlat = lat2 - lat1; 
var a = Math.pow(Math.sin(dlat / 2), 2) 
+ Math.cos(lat1) * Math.cos(lat2) 
* Math.pow(Math.sin(dlon / 2),2); 

var c = 2 * Math.asin(Math.sqrt(a)); 

// Radius of earth in kilometers. Use 3956  
// for miles 
var r = 6371; 

// calculate the result 
return(c * r); 
}  

//inserting pharmacy data to database
router.get('/insert',async function(req,re,next){
    for(var i=0;i<pharmacies.length;i++){
        //var jsonpharm=JSON.parse(pharmacies[i]);
        await Mphamacies.create(pharmacies[i], function (err, post) {
            if (err) 
            {
                console.log(err);
                return next(err);
            }
            //res.json(post);
          });
    }
    res.json({});
})

//router for finding nearest pharmacy
router.get('/', async function (req, res, next) {
    var lat=req.query.latitude;
    var long=req.query.longitude;
    var mindistance=0.0;
    var nearestpharmacy;
    await Mphamacies.find({}, function (err, phar) {
    if (err) return next(err);
    for(var i=0;i<phar.length;i++){
        //calculating distance
        var idistance=distance(lat,phar[i].toJSON()["latitude"],long,phar[i].toJSON()["longitude"]);
        
        if(i==0){
            mindistance=idistance;
            nearestpharmacy=phar[i].toJSON();
            nearestpharmacy["distance"]=mindistance;
        }
        else{
            //check if distance is less than min distance if yes, assign it to the output
        if(mindistance>idistance){
            mindistance=idistance;
            nearestpharmacy=phar[i].toJSON();
            nearestpharmacy["distance"]=mindistance;
        }
    }
}
    
});
delete nearestpharmacy["_id"];delete nearestpharmacy["__v"];
res.json(nearestpharmacy);
});

module.exports = router;