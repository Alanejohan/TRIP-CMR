import './unmissable.css'
import AdvancedCard from '../card/advanced-card';

const Unmissable = () => {
    return(
        <div className="unmissable-container">
            <div className="unmissable-content">
                <div className="main-title-desc">
                    <h2 className="main-header">Unmissable Places in Buea</h2>
                    <p className="header-detail">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
                </div>
                
                <div className="unmissable-list">
                    < AdvancedCard 
                        cardlinkA="w-100"
                        imglinkA="assets/images/restaurant-table.png"
                        titletextA = "Network Restaurant & Lounge"  
                        
                    />
                    < AdvancedCard 
                        cardlinkA="w-100"
                        imglinkA="assets/images/restaurant-table.png"
                        titletextA = "Network Restaurant & Lounge"  
                        
                    />
                    < AdvancedCard
                        cardlinkA="w-100"
                        imglinkA="assets/images/restaurant-table.png" 
                        titletextA = "Network Restaurant & Lounge"  
                        
                    />
                    < AdvancedCard 
                        cardlinkA="w-100"
                        imglinkA="assets/images/restaurant-table.png"
                        titletextA = "Network Restaurant & Lounge"  
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default Unmissable


