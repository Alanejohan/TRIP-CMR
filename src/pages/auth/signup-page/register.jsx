import './register.css'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../../components/buttons/primary-button'

const Register = () => {
    
    return (
        <div className='register-container'>
            <div className="register-content">
                <div className="input-content">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src="assets/logo/logo.svg" alt="images in react" />
                        </Link>
                    </div>
                    <div className="register-input-container">
                        <div className="auth-text">
                            <h2 className="auth-title">
                                Sign up
                            </h2>
                            <p className="auth-description">
                                Welcome to <strong>CMR TRIP</strong> create an account.
                            </p>
                        </div>
                        <div className="input-field-cta">
                            <div className="name-field">
                                <label className="email auth-label" htmlFor="email">Name</label>
                                <div className="">
                                    <input type="email" name="email" id="email" className="auth-field" placeholder="Enter your Email" />
                                </div>
                            </div>
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
                            <div className="confirm-password-field">
                                <label className="password auth-label" htmlFor="password">Confirm Password*</label>
                                <div className="inputfield-cta">
                                    <input type="password" name="confirm-password" id="confirm-password" className="auth-field" placeholder="Confirm password" />
                                </div>
                            </div>
                            <div className="auth-buttons">
                                <Link className="full-width" to={'/preferences'}>
                                    <PrimaryButton className="full-width" label="Register" />
                                </Link>
                                <p>Already have an account? <Link className='text-btn' to={'/login'}> Sign in </Link></p>
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

export default Register