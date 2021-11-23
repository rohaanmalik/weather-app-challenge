const express = require('express');
const router = express.Router();
const got = require('got');
require('dotenv').config();
const geocode = require('../../utils/zip-codes-to-geo-coords.json')
const { aggregateJsonToDates, weatherService } = require("../weather/weatherService");
const { getUviForTheDay } = require('../weather/weatherService');

router.get("/",  async (req, res) => {

    const weatherData =  await weatherService(req.query.zip, process.env.API_KEY);

    res.json(weatherData);
    
});


module.exports = router;