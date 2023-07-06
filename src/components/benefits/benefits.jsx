import './benefits.css'

const Benefits = ({imgurlB}) => {
    return(
        <div className="ben-container">
            <div className="ben-content">
                <h2 className="main-header">Our top Categories</h2>
                <div className="benefits">
                    <div className="ben-list">
                        <div className="single-desc">
                            <p className="desc-number">1</p>
                            <div className="ben-desc">
                                <h3 className="desc-title">Our Top Categories</h3>
                                <p className="desc-detail">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
                            </div>
                        </div>
                        <div className="single-desc">
                            <p className="desc-number">2</p>
                            <div className="ben-desc">
                                <h3 className="desc-title">Our Top Categories</h3>
                                <p className="desc-detail">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
                            </div>
                        </div>
                        <div className="single-desc">
                            <p className="desc-number">3</p>
                            <div className="ben-desc">
                                <h3 className="desc-title">Our Top Categories</h3>
                                <p className="desc-detail">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </p>
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