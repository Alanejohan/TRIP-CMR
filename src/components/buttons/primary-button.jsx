import React from 'react'
import './primary-button.css'

const PrimaryButton = ({label, className,type}) => {
    return (
        <button className= {[`primary-button`, className].join(" ")} type={type}>
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