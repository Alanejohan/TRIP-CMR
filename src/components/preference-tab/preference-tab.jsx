import './preference-tab.css'

const PreferenceTab = ({label, className}) => {

    return (
        <div id='preference-tab' className={[`tab-container`, className].join(" ")}>
            <p className="tab-text">
                {label}
            </p>
        </div>
    )
}

export default PreferenceTab


//sample use case of the button
/*
< PreferenceTab
    className="actif"
    className="inactive"
    label = "Hotel"
/>
*/