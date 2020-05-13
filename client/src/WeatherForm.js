import React, { useState } from 'react'
import PropTypes from 'prop-types'

import FormField from './FormField'

const WeatherForm = ({ submitLocations }) => {
    const [ locationArr, setLocationArr ] = useState([])
    const [ form, setForm ] = useState(['field'])


    const handleAddLocation = (e, location) => {
        e.preventDefault()
        setLocationArr([...locationArr, location])
    }

    const addAnotherFormField = (e) => {
        e.preventDefault()
        setForm([...form, 'field'])
    }

    const handleSubmit = e => {
        submitLocations(e, locationArr)
    }

    return (
        <form onSubmit={handleSubmit}>
            { form.map((input, index) => (
                <FormField key={index} 
                    handleAddLocation={handleAddLocation} 
                    listItem={index + 1} 
                />
            )) }
            <button onClick={ addAnotherFormField }>
                +
            </button>
            <button>Submit Locations!</button>
        </form>
    )
}

WeatherForm.propTypes = {
    submitLocations: PropTypes.func.isRequired
}

export default WeatherForm