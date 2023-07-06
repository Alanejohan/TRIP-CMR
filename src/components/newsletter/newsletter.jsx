import './newsletter.css'
import PrimaryButton from '../buttons/primary-button'
import { Link } from 'react-router-dom'

const Suscribe = () => {
    return(
        <div className="suscribe-container">
            <div className="suscribe-content">
                <div className="suscribe-text">
                    <h2 className="suscribe-header">You want to get a personalized Trip ?</h2>
                    <p className="suscribe-detail">Sign up now and use our chat We will recommend you trip based on your personal preferences to ensure you enjoy to the fullest. </p>
                </div>
                <div className="suscribe-cta">
                    <Link >
                        <PrimaryButton label="Sign up"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Suscribe


