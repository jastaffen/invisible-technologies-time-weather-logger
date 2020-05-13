const express = require('express')
const router = express.Router()
const axios = require('axios')
const config = require('config')
const { randomBytes } = require('crypto')

const weather = {}

router.get('/', (req, res) => {
    res.send(weather)
});

const findWeatherInLocale = async (location) => {
    try {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${config.get('weatherKey')}`)
        return res.data
    } catch (err) {
        return err.response.status
    }
}

router.post('/', async (req, res) => {
    for (let location of req.body) {
        const data = await findWeatherInLocale(location)
        if (typeof data === 'number') {
            weather[location] = {
                id: randomBytes(4).toString('hex'),
                fallbackMessage: `Sorry, we don't have weather data 
                    on this location is not in this library.`
            }
        } else {
            const { main } = data.weather[0] 
            const { temp } = data.main
            const { speed } = data.wind
            const { country } = data.sys
            weather[location] = {
                id: randomBytes(4).toString('hex'),
                currentTemperature: temp,
                windSpeed: speed,
                country,
                description: main,
                timezone: data.timezone
            }
        } 
    }
    res.send(weather)
});

module.exports = router