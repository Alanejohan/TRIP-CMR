import './unmissable.css'
import AdvancedCard from '../card/advanced-card';

const Unmissable = () => {
    return(
        <div className="unmissable-container">
            <div className="unmissable-content">
                <div className="main-title-desc">
                    <h2 className="main-header">Unmissable Places in Buea</h2>
                    <p className="header-detail">Discover the best Buea offers to its visitors and inhabitants. Discover the unique attractions that make Buea special </p>
                </div>
                
                <div className="unmissable-list">
                    < AdvancedCard 
                        cardlinkA="w-100"
                        imglinkA="assets/images/image 15.png"
                        titletextA = "Network Restaurant & Lounge"  
                        
                    />
                    < AdvancedCard 
                        cardlinkA="w-100"
                        imglinkA="assets/images/image 11.png"
                        titletextA = "Iya Restaurant"  
                        
                    />
                    < AdvancedCard
                        cardlinkA="w-100"
                        imglinkA="assets/images/image 9.png" 
                        titletextA = "WDC Apartment & Restaurant"  
                        
                    />
                    < AdvancedCard 
                        cardlinkA="w-100"
                        imglinkA="assets/images/image 13.png"
                        titletextA = "Fatima Buea"  
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default Unmissable


