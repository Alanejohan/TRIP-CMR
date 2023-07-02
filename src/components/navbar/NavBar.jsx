import './navbar.css'
import { Link } from 'react-router-dom'
import SecondaryButton from '../buttons/secondary-button'
import PrimaryButton from '../buttons/primary-button'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="nav-container">
                <div className="logo">
                    <img src="assets/logo/logo.svg" alt="images in react"/>
                </div>
                <div className="menu-item">
                    <ul className='menu-item-container'>
                        <li className='single-menu-item'>
                            Top Destinations
                        </li>
                        <li className='single-menu-item'>
                            Categories
                        </li>
                        <li className='single-menu-item'>
                            Search
                        </li>
                        <li className='single-menu-item'>
                            About us
                        </li>
                    </ul>
                </div>
                <div className="cta">
                    <Link >
                        <SecondaryButton label="Login"/>
                    </Link>
                    <Link >
                        <PrimaryButton label="Search"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar