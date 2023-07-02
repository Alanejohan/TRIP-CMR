import React from 'react'
import './landing-hero.css'
import PrimaryButton from '../buttons/primary-button'

const LandingHero = () => {
    return (
        <div className="container">
            <div className="img">
                <img src="assets/logo/logo.svg" alt="images in react"/>
            </div>
            <div className="searchbar">
                <div className="category"></div>
                <div className="description"></div>
                <PrimaryButton label="Search"/>
            </div>
        
        </div>
    )
}

export default LandingHero