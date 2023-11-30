import React from 'react';
import './Details.css';
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/footer';
import ProductDetails from '../../components/product-details/product-details';

import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';




const ProductDetail = () => {


    const placeId = 'YOUR_BUSINESS_PLACE_ID';
    const locations = { lat: 0, lng: 0 }

    // useEffect(() => {
    //     const fetchData = async () => {
    //     const result = await axios('YOUR_API_URL');
    //     setLocation(result.data); // assuming the API returns an object with lat and lng properties
    //     };

    //     fetchData();
    // }, []);

    return (
        <div>
            <Navbar />
            <div className="product-detail-page-container">
                <div className="product-page-container">
                    <div className="single-product-detail">
                        <ProductDetails />
                    </div>
                    <div className="map">
                        <LoadScript googleMapsApiKey="AIzaSyDpnPABucZMh7qM-9atmn4w4Ojc67F9qFg">
                            <GoogleMap
                                mapContainerStyle={{ width: '550px', height: '600px' }}
                                center={location}
                                zoom={10}
                                options={{ placeIdOnly: true }}
                            >
                                <Marker position={locations} placeId={placeId} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail

