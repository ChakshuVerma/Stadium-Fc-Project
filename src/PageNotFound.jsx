import React from 'react';
import {Link} from 'react-router-dom';
import {FaHome, FaQuestionCircle} from 'react-icons/fa'

const PlayerNotFound = () => {

    const iconStyling = {
        height: '30', 
        width: '30',  
        marginRight: '5px', 
        display: 'inline'
    };

    const containerStyle = {
        minHeight: '80vh',
        maxWidth: '95vw',
        display: 'grid',
        placeItems: 'center'
    }

    const textStyle={
        fontSize: '3rem',
        color: 'gray'
    }

    return(
        <>
        <div className="main-div">
            <div className="navbar">
                <Link to="/"><FaHome style={iconStyling}/><p id="home-button">Home</p></Link>
                <Link to="/help"><FaQuestionCircle style={iconStyling}/><p id="help-button">Help</p></Link>
            </div>
            <div style={containerStyle}> 
                <p style={textStyle}>Page Not Found</p>
            </div>
        </div>
    </>
    )
}

export default PlayerNotFound;