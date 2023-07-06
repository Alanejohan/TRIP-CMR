import './personalized-trip.css'
import AdvancedCard from '../card/advanced-card';

const PersonalizedTrip = () => {
    return(
        <div className="personalized-trip-container">
            <div className="personalized-trip-content">
                <div className="main-title-desc">
                    <h2 className="main-header">Create a Personalized Trip</h2>
                    <p className="header-detail">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
                </div>
                
                <div className="personalized-trip-list">
                    < AdvancedCard 
                        
                        cardlinkA="w-50"
                        imglinkA="assets/images/restaurant-table.png"
                        imgclassnameA="h-70"
                        cattextA = "Day 1: Restaurant"  
                        titletextA = "Network Restaurant & Lounge"  
                        desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        
                    />
                    <div className="personalized-trip-column">
                        < AdvancedCard 
                            categoryclassnameA = "small-cat-text"  
                            titleclassnameA = "small-title"  
                            descclassnameA = "small-desc"
                            cardlinkA="w-100"
                            imglinkA="assets/images/restaurant-table.png"
                            imgclassnameA="h-50"
                            cattextA = "Day 1: Restaurant"  
                            titletextA = "Network Restaurant & Lounge"  
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            
                        />
                        < AdvancedCard 
                            categoryclassnameA = "small-cat-text"  
                            titleclassnameA = "small-title"  
                            descclassnameA = "small-desc"
                            cardlinkA="w-100"
                            imglinkA="assets/images/restaurant-table.png"
                            imgclassnameA="h-50"
                            cattextA = "Day 1: Restaurant"  
                            titletextA = "Network Restaurant & Lounge"  
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            
                        />
                    </div>
                    <div className="personalized-trip-column">
                        < AdvancedCard 
                            categoryclassnameA = "small-cat-text"  
                            titleclassnameA = "small-title"  
                            descclassnameA = "small-desc" 
                            cardlinkA="w-100"
                            imglinkA="assets/images/restaurant-table.png"
                            imgclassnameA="h-50"
                            cattextA = "Day 1: Restaurant"  
                            titletextA = "Network Restaurant & Lounge"  
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            
                        />
                        < AdvancedCard 
                            categoryclassnameA = "small-cat-text"  
                            titleclassnameA = "small-title"  
                            descclassnameA = "small-desc"
                            cardlinkA="w-100"
                            imglinkA="assets/images/restaurant-table.png"
                            imgclassnameA="h-50"
                            cattextA = "Day 1: Restaurant"  
                            titletextA = "Network Restaurant & Lounge"  
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalizedTrip


