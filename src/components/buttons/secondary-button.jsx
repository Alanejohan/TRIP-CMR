import React from 'react'
import './secondary-button.css'

const SecondaryButton = ({label, className,type}) => {
    return (
        <button className= {[`secondary-button`, className].join(" ")} type={type}>
            {label}
        </button>
    )
}

export default SecondaryButton

//sample use case of the button
/*
< SecondaryButton
    className = "text-[#012966] mt-5 bg-white hover:bg-blue-600 hover:text-white"
    label = "Sign Up"
/>
*/