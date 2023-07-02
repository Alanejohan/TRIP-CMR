import React from 'react'
import './primary-button.css'

const PrimaryButton = ({label, className}) => {
    return (
        <button className= {[`primary-button`, className].join(" ")}>
            {label}
        </button>
    )
}

export default PrimaryButton


//sample use case of the button
/*
< PrimaryButton
    className="button-fullwidth"
    label = "Sign Up"
/>
*/