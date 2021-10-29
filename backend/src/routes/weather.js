const express = require('express');
const router = express.Router();
const got = require('got');
require('dotenv').config();
const geocode = require('../utils/zip-codes-to-geo-coords.json')

router.get("/",  async (req, res) => {
    const data = await got({
        url: `https://api.openweathermap.org/data/2.5/forecast?zip=${req.query.zip},us&appid=${process.env.API_KEY}`,
    });
    const dataJson = JSON.parse(data.body);

    const { list: hourlyWeather } = dataJson;
    const latLong = geocode[req.query.zip];
    console.log(latLong);
    // process the data and give out only relevant info 
    // make another call (one-call)
    const allData = await got({
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latLong[0]}&lon=${latLong[1]}&exclude=minutely,alerts&appid=${process.env.API_KEY}`,
    });

    const allDataJson = JSON.parse(allData.body);
    // get uvi and add make it into one response
    const { daily } = allDataJson;
    getUviForTheDay(hourlyWeather, daily)
    // give that response
    res.json(hourlyWeather);
    
});

function getUviForTheDay(listA, listB){
    const dateToUvi = new Map();
    
    listB.forEach(element => {
        let somedate = new Date(element.dt * 1000);
        dateToUvi.set(somedate.toLocaleDateString(), element)
    });

    listA.forEach(element => {
        let somedate = new Date(element.dt_txt);
        element.uvi = dateToUvi.get(somedate.toLocaleDateString()).uvi
    });

}

module.exports = router;