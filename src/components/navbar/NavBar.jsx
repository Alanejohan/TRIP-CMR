import './navbar.css'
import { Link } from 'react-router-dom'
import SecondaryButton from '../buttons/secondary-button'
import PrimaryButton from '../buttons/primary-button'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="nav-container">
                <div className="logo">
                    <Link to={'/'}>
                        <img src="assets/logo/logo.svg" alt="images in react"/>
                    </Link>
                </div>
                <div className="menu-item">
                    <ul className='menu-item-container'>
                        <li className='single-menu-item'>
                            <Link to={'/top-recommendation'} className='header-link'>Top Destinations</Link>
                        </li>
                        <li className='single-menu-item'>
                            <Link className='header-link' to={'/category'}>Categories</Link> 
                        </li>
                        <li className='single-menu-item'>
                            <Link className='header-link' to={'/search'}>Search</Link>
                        </li>
                    </ul>
                </div>
                <div className="cta">
                    <Link to={'/login'}>
                        <SecondaryButton  label="Login"/>
                    </Link>
                    <Link to={'/search'}>
                        <PrimaryButton label="Search"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar