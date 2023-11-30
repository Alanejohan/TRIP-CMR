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
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};




const SearchResult = () => {
    const location = useLocation();

    const navigate = useNavigate()

    const [locations, setLocations] = useState({ lat: 0, lng: 0 });

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


        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };
    // }, [categoryData, descriptionData]);

    useEffect(() => {
        fetchRecommendations()
    }, [categoryData, descriptionData]);


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
        // AIzaSyDpnPABucZMh7qM-9atmn4w4Ojc67F9qFg
        // AIzaSyBXFAxSgXP7b5D25WEtjxkYqoWM2PjxaLg
        // https://codepen.io/waterswv/pen/rKzrvo
        // https://preview.codecanyon.net/item/ev-hub-charging-station-booking-react-admin-ui-dashboard-web-app-template/full_screen_preview/49171856?_ga=2.139523509.74765813.1701300475-1303799048.1670612067
        // https://codepen.io/waterswv/pen/rKzrvo
        // https://6ammart-admin.6amtech.com/admin/store/add
      })

    //   const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);

    //     setMap(map)
    // }, [])

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

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
                        isLoaded ? (
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >

                                <></>
                            </GoogleMap>
                        ) : <div></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchResult

