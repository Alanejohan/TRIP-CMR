import React from 'react'
import './category-hero.css'

const CategoryHero = ({
    cardcontainerC,
    imgclassnameA,
    imglinkC,
    descriptioncontainerC,
    categoryclassnameC,
    descclassnameC,
    categorytextC,
    desctextC
}) => {
    return (
        <div className="hero-category-container">
            <div className={[`hero-category-card-container`, cardcontainerC].join(" ")}>
                <img className={[`category-hero-img`, imgclassnameA].join(" ")} src={imglinkC} alt="hero section background" />
                <div className={[`category-hero-description-container`, descriptioncontainerC].join(" ")} >
                    <h6 className="category-hero-acronym"> DISCOVER </h6>
                    <h4 className={[`category-hero-category`, categoryclassnameC].join(" ")} > {categorytextC} in Buea</h4>
                    <p className={[`category-hero-desc`, descclassnameC].join(" ")} > {desctextC} </p>
                </div>
            </div>
        </div>
    )
}

export default CategoryHero

//sample use case of the advanced card
/*
< CategoryHero
    cardcontainerC = ""
    imgclassnameC = ""
    imglinkC
    descriptioncontainerC = "" 
    categoryclassnameC = ""  
    titleclassnameC = ""  
    descclassnameC = ""  
    titletextC = "Network Restaurant & Lounge"  
    desctextC = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. "
/>
*/