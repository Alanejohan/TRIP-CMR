import React from 'react'
import './simple-card.css'
import { Link } from 'react-router-dom'

const SimpleCard = ({
    cardlinkS,
    cardcontainerS, 
    imgclassnameS,
    imglinkS, 
    descriptioncontainerS, 
    categoryclassnameS, 
    titleclassnameS, 
    descclassnameS, 
    cattextS, 
    titletextS, 
    desctextS
}) => {
    return (
        <Link to={"/"} className= {[`card-link`, cardlinkS].join(" ")}>
            <div className= {[`simple-card-container`, cardcontainerS].join(" ")}>
                <img className= {[`simple-card-img`, imgclassnameS].join(" ")} src={imglinkS} alt="hero section background"/>
                <div className= {[`simple-description-container`, descriptioncontainerS].join(" ")} >
                    <h6  className= {[`simple-card-category`, categoryclassnameS].join(" ")} > {cattextS} </h6>
                    <h4  className= {[`simple-card-title`, titleclassnameS].join(" ")} > {titletextS} </h4>
                    <p className= {[`simple-card-desc`, descclassnameS].join(" ")} > {desctextS} </p>
                </div>
            </div>
            
        </Link>
    )
}

export default SimpleCard

//sample use case of the simple card
/*
< SimpleCard
    cardcontainerS = ""
    imagelinkS = " "
    imgclassnameS = "" 
    descriptioncontainerS = "" 
    categoryclassnameS = ""  
    titleclassnameS = ""  
    descclassnameS = ""  
    cattextS = "Restaurant"  
    titletextS = "Network Restaurant & Lounge"  
    desctextS = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. "
/>
*/