import React from 'react'
import './landing-hero.css'
import PrimaryButton from '../../buttons/primary-button'
import axios from 'axios'
import { useEffect, useState } from 'react'

const LandingHero = () => {
    

    const [options, setOptions] = useState(['']);
    //const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const url = 'https://api.github.com/users/Alanejohan'
        axios.get(url).then((response) => {
            setOptions(response.data);
        });
    }, []); 
    console.log(options);

    return (
        <div className="container">
            <div className="hero-img-container">
                <img className="hero-img" src="assets/images/hero-img.png" alt="hero section background"/>
            </div>
            <div className="searchbar">
                <div className="cat-desc">
                    <div className="category">
                        <label htmlFor="categories">Category</label>
                        <select className='search-dropdown' name="categories" id="categories">
                            <option value="select a category">
                                {options.name}
                            </option>
                        </select>
                    </div>
                    <hr className='rule'/>
                    <div className="description">
                        <label htmlFor="search-description"> Description</label>
                        <input className='search-description' type="search" name="" id="search-description" placeholder='Describe the place you are going to. Give in your preferences.'/>
                    </div>
                </div>
                <PrimaryButton label="Search"/>
            </div>
        
        </div>
    )
}

export default LandingHero