import './category-recommendation.css'
import SimpleCard from '../../card/simple-card';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { googledata } from '../../landing-components/category/businessData';
import { useNavigate } from 'react-router-dom';

const CategoryRecommendation = () => {
    const navigate = useNavigate()
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const headersList = {
                    Accept: "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Content-Type": "application/json",
                };

                const bodyContent = JSON.stringify({
                    category: "Restaurant",
                    description: "I want to eat exotic foods",
                });

                const reqOptions = {
                    url: "http://localhost:8000/api/recommend/",
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };

                const response = await axios.request(reqOptions);
                const responseData = JSON.parse(response.data.data);

                setRecommendations(responseData);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };

        fetchRecommendations();
    }, []);

    const fetchBusinessDetails = async (businessId) => {
        const googleMapsOptions = {
            method: "GET",
            url: "https://local-business-data.p.rapidapi.com/business-details",
            params: {
                business_id: businessId,
                extract_emails_and_contacts: "true",
                extract_share_link: "false",
                region: "us",
                language: "en",
            },
            headers: {
                "X-RapidAPI-Key": "d9840ce692msh35e156512d14824p185773jsn11f204474169",
                "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
            },
        };

        try {
            axios.request(googleMapsOptions)
                .then((res) => {
                    console.log("Buisiness details: ", res)
                    navigate("/product-detail", {
                        state: res.data
                    })
                })
            
        } catch (error) {
            console.error("Error fetching business details:", error);
        }
    };

    return (

        <div className="category-recommendation-container">
            <div className="category-recommendation-content">
                <div className="main-title-desc">
                    <h2 className="main-header">Hotel Recommendations In Buea</h2>
                    <p className="header-detail">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
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
    )
}

export default CategoryRecommendation



