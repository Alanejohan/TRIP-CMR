import { Link } from "react-router-dom";
import './footer.css'
import PrimaryButton from "../buttons/primary-button";

const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer-item-container">
                <div className="footer-logo-desc">
                    <img src="assets/logo/logo.svg" alt="images in react"/>
                    <p className="footer-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
                </div>
                <div className="footer-menu-column">
                    <ul className='footer-menu-item-container'>
                        <Link className="footer-link">
                            <li className='footer-menu-title'>
                                Pages
                            </li>
                        </Link>
                        <Link className="footer-link">
                            <li className='footer-menu-item'>
                                Categories
                            </li>
                        </Link>
                        <Link className="footer-link">
                            <li className='footer-menu-item'>
                                Search
                            </li>
                        </Link>
                        <Link className="footer-link">
                            <li className='footer-menu-item'>
                                About Us
                            </li>
                        </Link>
                        <Link className="footer-link">
                            <li className='footer-menu-item'>
                                Contact Us
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="footer-menu-column">
                    <ul className='footer-menu-item-container'>
                        <Link className="footer-link">
                            <li className='footer-menu-title'>
                                Pages
                            </li>
                        </Link>
                        <Link className="footer-link">
                            <li className='footer-menu-item'>
                                Categories
                            </li>
                        </Link>
                        <Link className="footer-link">
                            <li className='footer-menu-item'>
                                Search
                            </li>
                        </Link>
                        <Link className="footer-link">
                            <li className='footer-menu-item'>
                                About Us
                            </li>
                        </Link>
                        <Link className="footer-link">
                            <li className='footer-menu-item'>
                                Contact Us
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="newsletter">
                    <label className="newsletter-label" htmlFor="newsletter">Stay in the loop</label>
                    <div className="inputfield-cta">
                        <input type="email" name="newsletter" id="newsletter" className="footer-input-custom" placeholder="Enter your Email"/>
                        <Link >
                            <PrimaryButton label="suscribe"/>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="footer-hr"/>
            <div className="copyrights">
                <p className="company-name">© 2023 cmr trip. All rights reserved</p>
                <p className="rights">All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer