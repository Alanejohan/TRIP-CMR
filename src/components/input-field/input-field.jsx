import React from "react"

const InputField = (
    placeholdertext,
    inputclassname
) => {
    return(
        <input type="text" className= {[`secondary-`, inputclassname].join(" ")} placeholder={placeholdertext} />
    )
}

export default InputField

//sample use case of the input field
/*
< InputField
    className = "text-[#012966] mt-5 bg-white hover:bg-blue-600 hover:text-white"
    label = "Sign Up"
/>
*/