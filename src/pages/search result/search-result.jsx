import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/footer';
import SimpleCard from '../../components/card/simple-card';
import PrimaryButton from '../../components/buttons/primary-button';
import { categoryData } from '../../components/landing-components/category/hello';
import axios from 'axios';

import './search-result.css';
import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';
import { async } from 'q';





const SearchResult = () => {
    const location = useLocation();

    const navigate = useNavigate()

    const [locations, setLocations] = useState([]);
    const [BusinessIds, setBusinessIds] = useState([]);

    const { description, category } = location.state || { description: "", category: "" };

    const [descriptionData, setDescriptionData] = useState(description)
    const [categoryOption, setCaterogyOption] = useState(category);
    const [recommendations, setRecommendations] = useState([]);

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


    const fetchRecommendations = async () => {

        const bodyContent = JSON.stringify({
            category: categoryOption,
            description: descriptionData,
        });

        try {
            const headersList = {
                Accept: "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json",
            };

            const reqOptions = {
                url: "http://localhost:8000/api/recommend/",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            };

            const response = await axios.request(reqOptions);
            const responseData = JSON.parse(response.data.data);
            console.log(responseData);
            setRecommendations(responseData);

            const placeIds = [responseData[0]['Business Id']] 
            const BusinessIds = [responseData[0]['Business Id']];
            // const BusinessIds = responseData.map(item => item['Business Id']);
            setBusinessIds(BusinessIds);


        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };
    // }, [categoryData, descriptionData]);

    useEffect(() => {
        fetchRecommendations()
    }, [categoryData, descriptionData]);


    // useEffect(()=> {
    //     console.log('test');
    //     const fetchBusinessIds = async () => {

    //         const locations = await Promise.all(BusinessIds.map(async (BusinessId) => {
    //             const res = await axios.get({url: "https://maps.googleapis.com/maps/api/business/details/json?business_id=${BusinessId}&key=AIzaSyDpnPABucZMh7qM-9atmn4w4Ojc67F9qFg"});
    //             const resData = await res.json();
    //             console.log(resData);
    //             console.log('me')
    //             return resData.result.geometry.location;
    //         }));
    //         setLocations(locations);
    //     };
    // }, []);


    const googleMapsApiKey = 'AIzaSyBXFAxSgXP7b5D25WEtjxkYqoWM2PjxaLg';

    return (
        <div>
            <Navbar />
            <div className="search-result-page-container">
                <div className="results-container">
                    <div className="search-recommendation-list">
                        <div className="title-subtitle">
                            <h2 className="title"> Top recommendations for your Search</h2>
                            <p className="subtitle">Here is the list of recommendations for your search</p>
                        </div>
                        <form className="searchbar-search">
                            <div className="cat-desc">
                                <div className="category-search">
                                    <select className='search-dropdown' value={categoryOption} onChange={e => setCaterogyOption(e.target.value)} name="categories" id="categories">
                                        {categoryData.map((category) => (
                                            <option key={category.id} value={category.attributes.name}>{category.attributes.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <hr className='rule' />
                                <div className="description-search">
                                    <input className='search-description' type="search" value={descriptionData} onChange={e => { setDescriptionData(e.target.value) }} name="" id="search-description" placeholder='Describe the place you are going to.' />
                                </div>
                            </div>
                            <PrimaryButton label="Search" type="submit" onClick={fetchRecommendations} />
                        </form>
                        <div className="recommended-card-list">

                            {/* {dataArray.map((single, key) => (
                                        
                                        <SimpleCard
                                            key={key}
                                            cardlinkS="w-48"
                                            imglinkS="assets/images/restaurant-table.png"
                                            imgclassnameS=""
                                            // cattextS="Restaurant"
                                            cattextS={single.title}
                                            titletextS="Network Restaurant & Lounge"
                                            desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                                        />
                                    ))} */}

                            {recommendations["Category"] &&
                                Object.keys(recommendations["Category"]).map((key) => (
                                    <SimpleCard
                                        clickHandler={() => fetchBusinessDetails(recommendations["Business Id"][key])}
                                        key={key}
                                        cardlinkS="w-48"
                                        imglinkS="assets/images/restaurant-table.png"
                                        imgclassnameS=""
                                        cattextS={recommendations["Category"][key]}
                                        titletextS={recommendations.Title[key]}
                                        desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                                    />

                                ))}

                        </div>
                    </div>
                    <div className="map">

                        {/* <img className="google-maps-image" src="assets/images/maps-image.png" alt="hero section background" /> */}
                        {/* <LoadScript googleMapsApiKey="AIzaSyDpnPABucZMh7qM-9atmn4w4Ojc67F9qFg">
                            <GoogleMap
                                mapContainerStyle={{ width: '600px', height: '600px' }}
                                center={{lat:0, lng: 0}} // Center the map on the first location
                                zoom={10}
                                options={{BusinessIdOnly: true}}
                            >
                                 {locations.map((location, index) => (
                                <Marker key={index} position={location} />
                                ))} //comment
                                <Marker position={{lat:0, lng: 0}} BusinessId={{0x1061318d288222db:0xd42344046a4cae82}}  />//comment
                                {BusinessIds.map((BusinessId, index) => (
                                <Marker key={index} BusinessId={location}  location={{lat:26, lng: 89}} />
                                ))}
                            </GoogleMap>
                        </LoadScript> */}
                        <LoadScript googleMapsApiKey={googleMapsApiKey}>
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '400px' }} // Adjust as needed
                                center={{ lat: 0, lng: 0 }} // Set to the desired initial center coordinates
                                zoom={10} // Set to the desired initial zoom level
                            >
                                {BusinessIds.map((businessId, index) => (
                                <Marker
                                    key={index}
                                    position={{ lat: businessId.lat, lng: businessId.lng }} // Replace with the actual latitude and longitude values
                                />
                                ))}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchResult

