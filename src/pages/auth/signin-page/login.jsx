import './login.css'
import { Link } from 'react-router-dom'
import SecondaryButton from '../buttons/secondary-button'
import PrimaryButton from '../buttons/primary-button'

const Login = () => {
    return(
        <div className='login-container'>
            <div className="nav-content">
                <div className="input-logo">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src="assets/logo/logo.svg" alt="images in react"/>
                        </Link>
                    </div>
                    <div className="input-container">
                        
                    </div>
                </div>
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
                            <Link className='header-link'>Search</Link>
                        </li>
                        <li className='single-menu-item'>
                            <Link className='header-link'>About us</Link>
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

export default Login