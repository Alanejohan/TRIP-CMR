import './category.css'
import { Link } from 'react-router-dom'

const Category = () => {
    return(
        <div className="cat-container">
            <div className="cat-content">
                <h2 className="main-header">Our top Categories</h2>
                <div className="cat-list">
                    <Link to={"/"} className="single-cat">
                        <img className="cat-img" src="assets/images/hero-img.png" alt="hero section background"/>
                        <p className="cat-name">Hotel</p>
                    </Link>
                    <Link to={"/"} className="single-cat">
                        <img className="cat-img" src="assets/images/hero-img.png" alt="hero section background"/>
                        <p className="cat-name">Restaurant</p>
                    </Link>
                    <Link to={"/"} className="single-cat">
                        <img className="cat-img" src="assets/images/hero-img.png" alt="hero section background"/>
                        <p className="cat-name">Lodges</p>
                    </Link>
                    <Link to={"/"} className="single-cat">
                        <img className="cat-img" src="assets/images/hero-img.png" alt="hero section background"/>
                        <p className="cat-name">Schools</p>
                    </Link>
                    <Link to={"/"} className="single-cat">
                        <img className="cat-img" src="assets/images/hero-img.png" alt="hero section background"/>
                        <p className="cat-name">Touristic Attraction</p>
                    </Link>
                    <Link to={"/"} className="single-cat">
                        <img className="cat-img" src="assets/images/hero-img.png" alt="hero section background"/>
                        <p className="cat-name">Universities</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Category