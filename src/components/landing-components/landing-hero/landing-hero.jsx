import React from 'react'
import './landing-hero.css'
import PrimaryButton from '../../buttons/primary-button'
import axios from 'axios'
import { useState } from 'react'
import { categoryData } from '../category/hello';
import { useNavigate } from 'react-router-dom'

const LandingHero = () => {

    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [categoryOption, setCaterogyOption] = useState("Accomodation");
    const [recommendations, setRecommendations] = useState([]);

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const headersList = {
    //             "Accept": "*/*"
    //         };

    //         const reqOptions = {
    //             url: "http://localhost:8000/api/category",
    //             method: "GET",
    //             headers: headersList,
    //         };
            

    //         try {
    //             const response = await axios.get(reqOptions);
    //             console.log("hello world");
    //         } catch (error) {
    //             console.error('Error fetching categories:', error);
    //         }
    //     };

    //     fetchCategories();
    // }, []);

        const fetchRecommendations = async (e) => {
            e.preventDefault();
            const bodyContent = JSON.stringify({
                category: categoryOption,
                description: description,
            });

            try {
                const headersList = {
                    Accept: "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Content-Type": "application/json",
                };

                const reqOptions = {
                    url: "http://localhost:8000/api/recommend/",
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };

                const response = await axios.request(reqOptions);
                const responseData = JSON.parse(response.data.data);
                console.log(responseData);
                setRecommendations(responseData);
                navigate('/search', {
                    state: {
                        category: categoryOption,
                        description: description
                    }
                })
                
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };

    return (
        <div className="container">
            <div className="hero-img-container">
                <img className="hero-img" src="assets/images/hero-img.png" alt="hero section background" />
            </div>
            <form className="searchbar" onSubmit={fetchRecommendations}>
                <div className="cat-desc">
                    <div className="category">
                        <label htmlFor="categories">Category</label>
                        <select className='search-dropdown' name="categories" id="categories" value={categoryOption} onChange={(e) => {setCaterogyOption(e.target.value)}}>
                            {categoryData.map((category) => (
                                <option key={category.id} value={category.attributes.name}>{category.attributes.name}</option>
                            ))}
                        </select>
                    </div>
                    <hr className='rule' />
                    <div className="description">
                        <label htmlFor="search-description"> Description</label>
                        <input className='search-description' type="search" value={description} onChange={e => {setDescription(e.target.value)}} name="" id="search-description" placeholder='Describe the place you are going to. Give in your preferences.' />
                    </div>
                </div>
                <PrimaryButton label="Search" type="submit" />
            </form>

        </div>
    )
}

export default LandingHero