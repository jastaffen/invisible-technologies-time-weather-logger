import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FormField = ({ handleAddLocation, listItem }) => {
    const [ location, setLocation ] = useState('')
    const [ isAdded, setIsAdded ] = useState(false)

    const handleClick = (e) => {
        if (location.length === 0) {
            return alert('Location cannot be blank')
        }
        handleAddLocation(e, location)
        setIsAdded(true)
    }


    return (
    <>
        {isAdded ?  
        <span>
           {`${listItem}.) ${location}`}
        </span>

        :
        <>

            <input value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="add location..."
            />
            <button onClick={handleClick} id="location">
                add location
            </button>
            
        </>
        }
        
    </>
    )
}

FormField.propTypes = {
    handleAddLocation: PropTypes.func.isRequired,
    listItem: PropTypes.number.isRequired,
}

export default FormField