const express = require('express');
const router = express.Router();
const got = require('got');

router.get("/",  async (req, res) => {
    const data = await got({
        url: 'https://api.openweathermap.org/data/2.5/forecast?zip=37934,us&appid=770cb1de97d06d65ef3763f1f4dcce4f',
    });
    const dataJson = JSON.parse(data.body);

    const { list: hourlyWeather } = dataJson;

    // process the data and give out only relevant info 
    // make another call (one-call)
    const allData = await got({
        url: 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,alerts&appid=770cb1de97d06d65ef3763f1f4dcce4f',
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