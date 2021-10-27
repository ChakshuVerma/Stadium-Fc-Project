import React from 'react';
import {Link} from 'react-router-dom';
import RadarChart from './RadarChart'
import {FaHome, FaQuestionCircle} from 'react-icons/fa'
import PlayerAttributes from './SpecificPlayerAttributes'

const PlayerFound = ({playerObject}) => {

    const iconStyling = {
        height: '30', 
        width: '30',  
        marginRight: '5px', 
        display: 'inline'
    };

    return(
        <>
            <div className="player-stats-container-div">
                <div className="navbar">
                    <Link to="/"><FaHome style={iconStyling}/><p id="home-button">Home</p></Link>
                    <Link to="/help"><FaQuestionCircle style={iconStyling}/><p id="help-button">Help</p></Link>
                </div>
                <div className="sub-container">
                    <div className="player-name-container">
                        <p className="player-name">{playerObject.Name}</p>
                    </div>
                    <div className="player-stats-container">
                        <div className="col-left">
                            <RadarChart player={playerObject}/>
                        </div>
                        <div className="col-right">
                            <div className="concise-data-container">
                                <p>Overall: <span>{playerObject.Overall}</span></p>
                                <p>Potential: <span>{playerObject.Potential}</span></p>
                            </div>
                            <div className="list-container">
                                <PlayerAttributes player={playerObject}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayerFound;