import './personalised.css'
import SimpleCard from '../../components/card/simple-card';
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/footer';

const PersonalizedRec = () => {

    return (
        <div className="container">
            <Navbar />
            <div className="category-recommendation-container">
                <div className="category-recommendation-content">
                    <div className="personalised-title-desc">
                        <h2 className="personalised-main-header">Your Personal recommedation Feed</h2>
                        <p className="personalised-detail">View a list of recommendationsbased on your preferences  </p>
                    </div>

                    {/* <div>
                    <h1>Recommended Restaurants</h1>
                    <ul>
                            {recommendations["Business Id"] &&
                                Object.keys(recommendations["Business Id"]).map((key) => (
                                    <li key={key}>
                                        {recommendations["Business Id"][key]} - Value:{" "}
                                        {recommendations.Title[key]}
                                        <button onClick={() => fetchBusinessDetails(recommendations["Business Id"][key])}>
                                            Get Business Details
                                        </button>
                                    </li>
                                ))}

                        </ul>
                    <div className="">
                        {googledata.map((data, index) => (
                            <div key={index}>
                                <p>{data.business_id}</p>
                                <p>{data.name}</p>
                                <p>{data.phone_number}</p>
                                <p>{data.full_address}</p>
                                <p>{data.rating}</p>
                                <p>{data.review_count}</p>
                                <p>{data.website}</p>
                                <p>{data.type}</p>
                                <p>{data.emails_and_contacts.emails[0]}</p>

                                <img src={data.photos_sample[0].photo_url} alt='restaurant_image' />

                                <p>{data.photos_sample[0].photo_url}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="category-recommendation-list">
                    {googledata.map((data, index) => (
                        <SimpleCard
                            key={index}
                            cardlinkS="w-23"
                            imglinkS={data.photos_sample[0].photo_url}
                            imgclassnameS=""
                            cattextS={data.type}
                            titletextS={data.name}
                            desctextS={data.full_address}
                        />))}
                </div> */}

                    {/* <div>
                    <h1>Recommended Restaurants</h1>
                    <ul>
                        {recommendations.Title &&
                            Object.keys(recommendations.Title).map((key) => (
                                <li key={key}>
                                    {recommendations.Title[key]} - Rating:{" "}
                                    {recommendations["Business Id"][key]}
                                </li>
                            ))}
                    </ul>
                </div> */}

                    <div className="category-recommendation-list">
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />
                        <SimpleCard
                            cardlinkS="w-23"
                            imglinkS="assets/images/hotel-image.png"
                            imgclassnameS=""
                            cattextS="Restaurant"
                            titletextS="Network Restaurant & Lounge"
                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                        />

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default PersonalizedRec



