import './login.css'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../../components/buttons/primary-button'
import { useReducer } from 'react'

const Login = () => {

    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );

    return (
        <div className='login-container'>
            <div className="login-content">
                <div className="input-content gap-login">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src="assets/logo/logo.svg" alt="images in react" />
                        </Link>
                    </div>
                    <div className="login-input-container">
                        <div className="auth-text">
                            <h2 className="auth-title">
                                Login
                            </h2>
                            <p className="auth-description">
                                Welcome back, please enter your details.
                            </p>
                        </div>
                        <div className="input-field-cta">
                            <div className="email-field">
                                <label className="email auth-label" htmlFor="email">Email*</label>
                                <div className="">
                                    <input type="email" name="email" id="email" className="auth-field" placeholder="Enter your Email" />
                                </div>
                            </div>
                            <div className="password-field">
                                <label className="password auth-label" htmlFor="password">Password*</label>
                                <div className="inputfield-cta">
                                    <input type="password" name="password" id="password" className="auth-field" placeholder="Password" />
                                </div>
                            </div>
                            <div className="remember-me">
                                <input type="checkbox" name="option1" value={checked} className='checkbox' onChange={toggle} />
                                <label for="option1">Remember me</label>
                            </div>
                            <div className="auth-buttons">
                                <Link className="full-width" to={'/preferences'}>
                                    <PrimaryButton className="full-width" label="Login to account" />
                                </Link>
                                <p>Don't have an account yet?<Link className='text-btn' to={'/register'}> Sign up </Link></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="image-container">
                    <div className="auth-image-container">
                        <div className="auth-img-text">
                            <img src="assets/logo/logo-white.svg" alt="logo" />
                            <p>Don’t know where to go next?  Explore undiscovered parts of Cameroon with CMR TOUR. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login