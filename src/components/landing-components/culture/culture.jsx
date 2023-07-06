import './culture.css'
import AdvancedCard from '../../card/advanced-card';

const Culture = () => {
    return (
        <div className="culture-container">
            <div className="culture-content">
                <div className="main-title-desc">
                    <h2 className="main-header">Discover the culture in Buea</h2>
                    <p className="header-detail">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
                </div>

                <div className="culture-list">
                    <div className="cul-left">
                        < AdvancedCard
                            cardlinkA="w-100"
                            imgclassnameA="cul-h-90"
                            imglinkA="assets/images/restaurant-table.png"
                            titletextA="Network Restaurant & Lounge"
                            cattextA = "Day 1: Restaurant"   
                            desctextA = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."

                        />
                    </div>
                    <div className="cul-right">
                        <div className="culture-post">
                            <img className="cul-img" src="assets/images/hero-img.png" alt="hero section background" />
                            <div className="cul-desc-container">
                                <p className="cul-cat">EXCLUSIVE</p>
                                <p className="cul-title">Dibanda Culture</p>
                                <p className="cul-desc">The main culture in Buea is known as the Dibanda Culture. It is a mixture of the cultures of the Ngumba, Bakweri, and Bafut people. It is a very peaceful and welcoming culture, with a great emphasis on hospitality and respect for one another.</p>
                            </div>
                        </div>
                        <div className="culture-post">
                            <img className="cul-img" src="assets/images/hero-img.png" alt="hero section background" />
                            <div className="cul-desc-container">
                                <p className="cul-cat">EXCLUSIVE</p>
                                <p className="cul-title">Dibanda Culture</p>
                                <p className="cul-desc">The main culture in Buea is known as the Dibanda Culture. It is a mixture of the cultures of the Ngumba, Bakweri, and Bafut people. It is a very peaceful and welcoming culture, with a great emphasis on hospitality and respect for one another.</p>
                            </div>
                        </div>
                        <div className="culture-post">
                            <img className="cul-img" src="assets/images/hero-img.png" alt="hero section background" />
                            <div className="cul-desc-container">
                                <p className="cul-cat">EXCLUSIVE</p>
                                <p className="cul-title">Dibanda Culture</p>
                                <p className="cul-desc">The main culture in Buea is known as the Dibanda Culture. It is a mixture of the cultures of the Ngumba, Bakweri, and Bafut people. It is a very peaceful and welcoming culture, with a great emphasis on hospitality and respect for one another.</p>
                            </div>
                        </div>
                        <div className="culture-post">
                            <img className="cul-img" src="assets/images/hero-img.png" alt="hero section background" />
                            <div className="cul-desc-container">
                                <p className="cul-cat">EXCLUSIVE</p>
                                <p className="cul-title">Dibanda Culture</p>
                                <p className="cul-desc">The main culture in Buea is known as the Dibanda Culture. It is a mixture of the cultures of the Ngumba, Bakweri, and Bafut people. It is a very peaceful and welcoming culture, with a great emphasis on hospitality and respect for one another.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Culture


