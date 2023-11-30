import React from 'react';
import './Details.css';
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/footer';
import ProductDetails from '../../components/product-details/product-details';




const ProductDetail = () => {



    return (
        <div>
            <Navbar />
            <div className="product-detail-page-container">
                <div className="product-page-container">
                    <div className="single-product-detail">
                        <ProductDetails />
                    </div>
                    <div className="map">
                        <img className="google-maps-image" src="assets/images/maps-image.png" alt="hero section background" />
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail

