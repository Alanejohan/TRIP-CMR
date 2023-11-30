import React from 'react';
import './Details.css';
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/footer';
import ProductDetails from '../../components/product-details/product-details';

import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom'



const ProductDetail = () => {

    const location = useLocation()
    const data = location.state.data

    return (
        <div>
            <Navbar />
            <div className="product-detail-page-container">
                <div className="product-page-container">
                    <div className="single-product-detail">
                        <ProductDetails />
                    </div>
                    <div className="map">
                        {/* <img className="google-maps-image" src="assets/images/maps-image.png" alt="hero section background" /> */}

                        {data.map((data, index) => (
                            <div>
                                {console.log(data.latitude,data.longitude)}
                            <LoadScript googleMapsApiKey="AIzaSyDpnPABucZMh7qM-9atmn4w4Ojc67F9qFg">
                                <GoogleMap
                                    mapContainerStyle={{ width: '550px', height: '750px' }}
                                    center={{lat:data.latitude, lng: data.longitude}} // Center the map on the first location
                                    zoom={17}
                                >
                                    <Marker position={{lat:data.latitude, lng: data.longitude}} />
                                </GoogleMap>
                            </LoadScript>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail

