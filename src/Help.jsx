import React from 'react';
import {Link} from 'react-router-dom';
import {FaHome, FaQuestionCircle} from 'react-icons/fa'

const Help = () =>{

    const iconStyling = {
        height: '30', 
        width: '30',  
        marginRight: '5px', 
        display: 'inline'
    };

    const containerStyle = {
        marginTop: '30px',
        minHeight: '80vh',
        maxWidth: '95vw',
        display: 'grid',
        placeItems: 'center'
    }

    const textStyle={
        fontSize: '1.5rem',
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
                <p style={textStyle}>
                    This web app is a fifa browser where the user can search players by their Name, Nationality, Club and Jersey Number.
                    <br/><br/>
                    To search for a player, the user should go to the <Link to='/' style={{textDecoration: 'none'}}>homepage</Link>
                    <br/><br/>
                    On the homepage, the user can search for the player by entering the search attribute in the search-box.
                    <br/><br/>
                    The user can then select the desired player and get the relevant information about that player.
                </p>
            </div>
        </div>
    </>
    )
}

export default Help;