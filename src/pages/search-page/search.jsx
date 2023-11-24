import React from 'react';
import './search.css';
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/footer';
import PrimaryButton from '../../components/buttons/primary-button';
import { useState } from 'react';
import { categoryData } from '../../components/landing-components/category/hello';
import SimpleCard from '../../components/card/simple-card';

const SearchPage = () => {
    const [description, setDescription] = useState("")

    return (
        <div>
            <Navbar />
            <div className="search-result-page-container">
                <div className="results-container">
                    <div className="search-recommendation-list">
                        <div className="title-subtitle">
                            <h2 className="title"> Top recommendations for your Search</h2>
                            <p className="subtitle">Here is the list of recommendations for your saerch</p>
                        </div>
                        <form className="searchbar-search">
                            <div className="cat-desc">
                                <div className="category-search">
                                    <select className='search-dropdown' name="categories" id="categories">
                                        {categoryData.map((category) => (
                                            <option key={category.id} value={category.attributes.name}>{category.attributes.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <hr className='rule' />
                                <div className="description-search">
                                    <input className='search-description' type="search" value={description} onChange={e => { setDescription(e.target.value) }} name="" id="search-description" placeholder='Describe the place you are going to.' />
                                </div>
                            </div>
                            <PrimaryButton label="Search" type="submit" />
                            <p>{description}</p>
                        </form>
                        <div className="recommended-card-list">
                            <SimpleCard
                                cardlinkS="w-48"
                                imglinkS="assets/images/restaurant-table.png"
                                imgclassnameS=""
                                cattextS="Restaurant"
                                titletextS="Network Restaurant & Lounge"
                                desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            />
                            <SimpleCard
                                cardlinkS="w-48"
                                imglinkS="assets/images/restaurant-table.png"
                                imgclassnameS=""
                                cattextS="Restaurant"
                                titletextS="Network Restaurant & Lounge"
                                desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            />
                            <SimpleCard
                                cardlinkS="w-48"
                                imglinkS="assets/images/restaurant-table.png"
                                imgclassnameS=""
                                cattextS="Restaurant"
                                titletextS="Network Restaurant & Lounge"
                                desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            />
                            <SimpleCard
                                cardlinkS="w-48"
                                imglinkS="assets/images/restaurant-table.png"
                                imgclassnameS=""
                                cattextS="Restaurant"
                                titletextS="Network Restaurant & Lounge"
                                desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            />
                            <SimpleCard
                                cardlinkS="w-48"
                                imglinkS="assets/images/restaurant-table.png"
                                imgclassnameS=""
                                cattextS="Restaurant"
                                titletextS="Network Restaurant & Lounge"
                                desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            />
                            <SimpleCard
                                cardlinkS="w-48"
                                imglinkS="assets/images/restaurant-table.png"
                                imgclassnameS=""
                                cattextS="Restaurant"
                                titletextS="Network Restaurant & Lounge"
                                desctextS="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.  m dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
                            />
                        </div>
                    </div>
                    <div className="map">
                        
                        <iframe
                            width="100%"
                            height="100%"
                            frameborder="0"
                            title='google maps iframe'
                            referrerpolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyCiyJG_dmQrw51f5j90OckNfEeLTJ3246g"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage

