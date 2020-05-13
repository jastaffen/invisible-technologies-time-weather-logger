import React from 'react'
import PropTypes from 'prop-types'

import { configureTime } from './configureTime'

const WeatherTimeList = ({ forecasts }) => {
    
    
    const renderedForecasts = Object.keys(forecasts).map(forecast => {
        const { id, timezone, currentTemperature, 
            windSpeed, country, 
            description, fallbackMessage } = forecasts[forecast]
        
        if (fallbackMessage) {
            return (
                <div key={ id } className="weather-card">
                    <div className="title">
                        { forecast }
                    </div>
                    
                    <div className="weather">
                        <h4 id="fallback">{fallbackMessage}</h4>
                    </div>
                </div>
            )
        }

        return (
            <div key={ id } className="weather-card">
                <div className="title">
                    <h3>{ forecast }, { country }</h3>
                </div>
                <div className="weather">
                    <h4>Current Temperature: { currentTemperature }˚F</h4>
                    <br />
                    <span>wind speed: {windSpeed}mph</span>
                    <p>{ description }</p>
                </div>
                <div className='clock'>
                    { configureTime(timezone) }
                </div>
            </div>
            
        )
    })

    return (
        <div className="cards-container">
            { renderedForecasts }
        </div>
    )
}

WeatherTimeList.propTypes = {
    forecasts: PropTypes.object.isRequired
}

export default WeatherTimeList