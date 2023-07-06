import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/NavBar';
import LandingHero from '../../components/landing-components/landing-hero/landing-hero';
import Category from '../../components/landing-components/category/category';
import Benefits from '../../components/benefits/benefits';
import Unmissable from '../../components/unmissable/unmissable';
import MostVisited from '../../components/landing-components/most-visited/most-visited';
import PersonalizedTrip from '../../components/personalized-trip/personalized-trip';
import Culture from '../../components/landing-components/culture/culture';
import Recent from '../../components/landing-components/recent/recent';
import Suscribe from '../../components/newsletter/newsletter';
import Footer from '../../components/footer/footer';


const Home = () => {
    return(
        <div> 
            <Navbar/>
            <div className="home-container">
                <LandingHero/>
                <Category/>
                <Benefits imgurlB={'assets/images/sample-hotel.png'} />
                <Unmissable/>
                <MostVisited/>
                <PersonalizedTrip/>
                <Culture/>
                <Recent/>
                <Suscribe/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home