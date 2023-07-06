import './recent.css'
import AdvancedCard from '../../card/advanced-card';

const Recent = () => {
    return(
        <div className="recent-container">
            <div className="recent-content">
                <div className="main-title-desc">
                    <h2 className="main-header">Recently Created Places</h2>
                    <p className="header-detail">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
                </div>
                
                <div className="recent-list">
                    <div className="recent-row1">
                        < AdvancedCard 
                            categoryclassnameA = "small-cat-text"  
                            titleclassnameA = "small-title"  
                            descclassnameA = "small-desc"
                            cardlinkA="recent-width1"
                            imglinkA="assets/images/restaurant-table.png"
                            imgclassnameA="recent-height"
                            cattextA = "Restaurant"  
                            titletextA = "Network Restaurant & Lounge"  
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            
                        />
                        < AdvancedCard 
                            categoryclassnameA = "small-cat-text"  
                            titleclassnameA = "small-title"  
                            descclassnameA = "small-desc"
                            cardlinkA="recent-width1"
                            imglinkA="assets/images/restaurant-table.png"
                            imgclassnameA="recent-height"
                            cattextA = "Restaurant"  
                            titletextA = "Network Restaurant & Lounge"  
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            
                        />
                    </div>
                    <div className="recent-row2">
                        < AdvancedCard 
                            categoryclassnameA = "small-cat-text"  
                            titleclassnameA = "small-title"  
                            descclassnameA = "small-desc" 
                            cardlinkA="recent-width2"
                            imglinkA="assets/images/restaurant-table.png"
                            imgclassnameA="recent-height"
                            cattextA = "Restaurant"  
                            titletextA = "Network Restaurant & Lounge"  
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            
                        />
                        < AdvancedCard 
                            categoryclassnameA = "small-cat-text"  
                            titleclassnameA = "small-title"  
                            descclassnameA = "small-desc"
                            cardlinkA="recent-width2"
                            imglinkA="assets/images/restaurant-table.png"
                            imgclassnameA="recent-height"
                            cattextA = "Restaurant"
                            titletextA = "Network Restaurant & Lounge"  
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        < AdvancedCard 
                            categoryclassnameA = "small-cat-text"  
                            titleclassnameA = "small-title"  
                            descclassnameA = "small-desc"
                            cardlinkA="recent-width2"
                            imglinkA="assets/images/restaurant-table.png"
                            imgclassnameA="recent-height"
                            cattextA = "Restaurant"  
                            titletextA = "Network Restaurant & Lounge"  
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recent


