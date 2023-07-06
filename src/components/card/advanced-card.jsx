import React from 'react'
import './advanced-card.css'
import { Link } from 'react-router-dom'

const AdvancedCard = ({
    cardlinkA,
    cardcontainerA, 
    imgclassnameA,
    imglinkA,
    descriptioncontainerA, 
    categoryclassnameA, 
    titleclassnameA, 
    descclassnameA, 
    cattextA, 
    titletextA, 
    desctextA
}) => {
    return (
        <Link to={"/"} className= {[`card-link`, cardlinkA].join(" ")}>
            <div className= {[`advanced-card-container`, cardcontainerA].join(" ")}>
                <img className= {[`advanced-card-img`, imgclassnameA].join(" ")} src={imglinkA} alt="hero section background"/>
                <div className= {[`advanced-description-container`, descriptioncontainerA].join(" ")} >
                    <h6  className= {[`advanced-card-category`, categoryclassnameA].join(" ")} > {cattextA} </h6>
                    <h4  className= {[`advanced-card-title`, titleclassnameA].join(" ")} > {titletextA} </h4>
                    <p className= {[`advanced-card-desc`, descclassnameA].join(" ")} > {desctextA} </p>
                </div>
            </div>
            
        </Link>
    )
}

export default AdvancedCard

//sample use case of the advanced card
/*
< AdvancedCard
    cardcontainerA = ""
    imgclassnameA = ""
    descriptioncontainerA = "" 
    categoryclassnameA = ""  
    titleclassnameA = ""  
    descclassnameA = ""  
    cattextA = "Restaurant"  
    titletextA = "Network Restaurant & Lounge"  
    desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. "
/>
*/