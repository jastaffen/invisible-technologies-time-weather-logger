import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import WeatherTimeList from './WeatherTimeList'
import WeatherForm from './WeatherForm'

export default () => {
    const [ forecasts, setForecasts ] = useState({})

    const fetchForecasts = async () => {
        const res = await axios.get('http://localhost:4000/weather')
        setForecasts(res.data)
    }

    useEffect(() => {
        fetchForecasts()
    }, []);

    const submitLocations = async (e, locationArr) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:4000/weather', locationArr)
        setForecasts(res.data)
    }

    return (
        <>
            <header>
                <h1>Invisible Technologies Date-and-Time-Logger</h1>
            </header>
            <div>
                <WeatherForm submitLocations={submitLocations} />
            </div>
            <main>
                <WeatherTimeList forecasts={forecasts} />
            </main>

        </>
    )
}