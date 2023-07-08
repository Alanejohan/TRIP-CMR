import './preference.css'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../../components/buttons/primary-button'
import PreferenceTab from '../../../components/preference-tab/preference-tab'

const Preference = () => {
    return (
        <div className='preference-container'>
            <div className="preference-content">
                <div className="preference-input-content">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src="assets/logo/logo.svg" alt="images in react" />
                        </Link>
                    </div>
                    <div className="preference-input-container">
                        <div className="auth-text">
                            <h2 className="preference-auth-title">
                                Choose Preferences
                            </h2>
                            <p className="preference-auth-description">
                                Select the type of places you are interested in.
                            </p>
                        </div>
                        <div className="inputpreferences">
                            <div className="preference-list">
                                <div className="preference-row">
                                    <PreferenceTab className="active" label="Hotel" />
                                    <PreferenceTab className="active" label="Hotel" />
                                </div>
                                <div className="preference-row">
                                    <PreferenceTab className="active" label="Hotel" />
                                    <PreferenceTab className="active" label="Hotel" />
                                </div>
                                <div className="preference-row">
                                    <PreferenceTab className="active" label="Hotel" />
                                    <PreferenceTab className="active" label="Hotel" />
                                </div>
                                <div className="preference-row">
                                    <PreferenceTab className="active" label="Hotel" />
                                    <PreferenceTab className="active" label="Hotel" />
                                </div>
                                <div className="preference-row">
                                    <PreferenceTab className="active" label="Hotel" />
                                    <PreferenceTab className="active" label="Hotel" />
                                </div>
                            </div>

                            <div className="auth-buttons">
                                <Link className="full-width" to={'/sucessful-auth'}>
                                    <PrimaryButton className="full-width" label="Proceed" />
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

export default Preference