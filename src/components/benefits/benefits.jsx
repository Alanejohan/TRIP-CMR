import './benefits.css'

const Benefits = ({imgurlB}) => {
    return(
        <div className="ben-container">
            <div className="ben-content">
                <h2 className="main-header">Just some steps ahead</h2>
                <div className="benefits">
                    <div className="ben-list">
                        <div className="single-desc">
                            <p className="desc-number">1</p>
                            <div className="ben-desc">
                                <h3 className="desc-title">Search</h3>
                                <p className="desc-detail">Enter the details of your prefered places, include the category and description and reeive top recommendations </p>
                            </div>
                        </div>
                        <div className="single-desc">
                            <p className="desc-number">2</p>
                            <div className="ben-desc">
                                <h3 className="desc-title">View Details</h3>
                                <p className="desc-detail">View details about each location and get more insights </p>
                            </div>
                        </div>
                        <div className="single-desc">
                            <p className="desc-number">3</p>
                            <div className="ben-desc">
                                <h3 className="desc-title">Make Informed Choices</h3>
                                <p className="desc-detail">Make informed choices by leveraging the details available for each location. </p>
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img className="ben-img" src={imgurlB} alt="sample hotel"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits