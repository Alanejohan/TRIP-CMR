import './success-auth.css'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../../components/buttons/primary-button'

const SuccessAuth = () => {
    return (
        <div className='success-container'>
            <div className="success-content">
                <div className="success-input-content">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src="assets/logo/logo.svg" alt="images in react" />
                        </Link>
                    </div>
                    <div className="success-input-container">
                        <div className="auth-text">
                            <h2 className="auth-title">
                                Account Created
                            </h2>
                            <p className="success-auth-description">
                                You have successfully created your account. You will be redirected to dashboard.
                            </p>
                        </div>
                        <div className="inputsuccesss">
                            <div className="auth-buttons">
                                <Link className="full-width">
                                    <PrimaryButton className="full-width" label="Dashbaord" />
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

export default SuccessAuth