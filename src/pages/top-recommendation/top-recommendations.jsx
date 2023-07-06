import React from 'react';
import './top-recommendations.css';
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/footer';
import RecommendationHero from '../../components/recommendation-components/recommendation-hero/recommendation-hero';


const TopRecommendation = () => {
    return(
        <div> 
            <Navbar/>
            <div className="category-detail-page-container">
                <RecommendationHero/>
                <Footer/>
            </div>
        </div>
    )
}

export default TopRecommendation