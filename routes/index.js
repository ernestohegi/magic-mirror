var express = require('express');
var request = require("request");
var router = express.Router();

var weatherApiCall = 'http://api.openweathermap.org/data/2.5/weather?q=London,UK&units=metric&APPID=ca9c7b017252cb727a478762a6be197d';
// var weatherApiCall = 'http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1';

/* GET home page. */
router.get('/', function(req, res, next) {
    request(weatherApiCall, function (error, response, body) {
        var data = JSON.parse(body);

        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.main.temp);

        res.render('index', {
            title: 'Express',
            weatherMain: data.weather[0].main,
            weatherCondition: data.weather[0].description,
            weatherIcon: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
            temperature: data.main.temp
        });
    });
});

module.exports = router;
