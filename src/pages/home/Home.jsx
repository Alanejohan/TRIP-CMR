import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/NavBar';
import LandingHero from '../../components/landing-hero/landing-hero';


const Home = () => {
    return(
        <div> 
            <Navbar/>
            <LandingHero/>
        </div>
    )
}

export default Home