import './most-visited.css'
import AdvancedCard from '../../card/advanced-card';
import SimpleCard from '../../card/simple-card';

const MostVisited = () => {
    return(
        <div className="most-visited-container">
            <div className="most-visited-content">
                <div className="main-title-desc">
                    <h2 className="main-header">Most Visited Places in Buea</h2>
                    <p className="header-detail">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
                </div>
                
                <div className="most-visited-list">
                    < AdvancedCard 
                        
                        cardlinkA="w-50"
                        imglinkA="assets/images/restaurant-table.png"
                        imgclassnameA="h-70"
                        cattextA = "Restaurant"  
                        titletextA = "Network Restaurant & Lounge"  
                        desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        
                    />
                    <SimpleCard
                        cardlinkS="w-25"
                        imglinkS="assets/images/restaurant-table.png"
                        imgclassnameS = ""
                        cattextS = "Restaurant"  
                        titletextS = "Network Restaurant & Lounge"  
                        desctextS = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                    />
                    <SimpleCard
                        cardlinkS="w-25"
                        imglinkS="assets/images/restaurant-table.png"
                        imgclassnameS =""
                        cattextS = "Restaurant"  
                        titletextS = "Network Restaurant & Lounge"  
                        desctextS = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                    />
                </div>
            </div>
        </div>
    )
}

export default MostVisited


