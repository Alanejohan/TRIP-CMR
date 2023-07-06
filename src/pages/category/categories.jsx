import React from 'react';
import './categories.css';
import Navbar from '../../components/navbar/NavBar';
import Benefits from '../../components/benefits/benefits';
import PersonalizedTrip from '../../components/personalized-trip/personalized-trip';
import Footer from '../../components/footer/footer';
import CategoryHero from '../../components/category-components/category-hero/category-hero';
import CategoryRecommendation from '../../components/category-components/category-recommedation/category-recommenation';


const CategoryDetail = () => {
    return(
        <div> 
            <Navbar/>
            <div className="category-detail-page-container">
                <CategoryHero imglinkC={'assets/images/hotel-image.png'} categorytextC={"Recommended"} desctextC={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."} />
                <CategoryRecommendation />
                <Benefits imgurlB={'assets/images/sample-hotel.png'}/>
                <PersonalizedTrip/>
                <Footer/>
            </div>
        </div>
    )
}

export default CategoryDetail