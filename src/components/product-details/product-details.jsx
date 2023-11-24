import React from 'react'
import './product-details.css'
import { useLocation } from 'react-router-dom'

const ProductDetails = (
//     {
//     imglinkPd,
//     titletextPd,
//     subtitletextPd,
//     cattextPd,
//     desctextPd,
//     phonetextPd,
//     fulladdresstextPd,
//     ratingcounttextPd,
//     ratingtextPd,
//     websitetextPd,
//     emailtextPd,
// }
) => {
    const location = useLocation()
    const data = location.state.data

    return (

        <div className="product-detail-element-container">
            {/* <div className={[`product-detail-description-container`, descriptioncontainerPd].join(" ")} >
                <h4 className={[`product-detail-element-title`, titleclassnamePd].join(" ")} > {titletextPd} </h4>
                <p className={[`product-detail-element-desc`, descclassnamePd].join(" ")} > {desctextPd} </p>
            </div> */}



                {data.map((data, index) => (
            < div key={index} className="product-detail-element-container">
        
                        {/* <p>{data.business_id}</p> */}
                        
                        {/* <p>{data.emails_and_contacts.emails[0]}</p> */}

                        {/* <img src={data.photos_sample[0].photo_url} alt='restaurant_image' />

                        <p>{data.photos_sample[0].photo_url}</p> */}
                    
                



                <div className="details-title-subtitle">
                    <h1 className="details-title"> {data.name} </h1>
                    {/* <p className="details-description"> {subtitletextPd} </p> */}
                </div>
                <img
                    className="details-element-img"
                    src={data.photos_sample[0].photo_url} alt='restaurant_image'
                />
                <div className="details-place-description">
                    <h6 className="product-detail-subsection-title">Place Description</h6>
                    {/* <p className="product-detail-element-desc"> {desctextPd} </p> */}
                </div>
                <div className="details-category">
                    <h6 className="product-detail-subsection-title">Place Category</h6>
                    <p className="product-detail-element-desc"> {data.type} </p>
                </div>
                <div className="details-phone-number">
                    <h6 className="product-detail-subsection-title">Phone Number</h6>
                    <p className="product-detail-element-desc"> {data.phone_number} </p>
                </div>
                <div className="details-email">
                    <h6 className="product-detail-subsection-title">Email:</h6>
                    {/* <p className="product-detail-element-desc"> {emailtextPd} </p> */}
                </div>
                <div className="details-website">
                    <h6 className="product-detail-subsection-title">Website URL</h6>
                    <p className="product-detail-element-desc"> {data.website} </p>
                </div>
                <div className="details-rating">
                    <h6 className="product-detail-subsection-title">User Rating</h6>
                    <p className="product-detail-element-desc"> {data.rating} </p>
                </div>
                <div className="details-review-count">
                    <h6 className="product-detail-subsection-title">Review Count</h6>
                    <p className="product-detail-element-desc"> {data.review_count} </p>
                </div>
                <div className="details-full-address">
                    <h6 className="product-detail-subsection-title">Full Address:</h6>
                    <p className="product-detail-element-desc"> {data.full_address} </p>
                </div>
            </div>

))}

            

        </div>
    )
}

export default ProductDetails