import React from 'react';
import {Link} from 'react-router-dom';
import RadarChart from './RadarChart'
import {FaHome, FaQuestionCircle} from 'react-icons/fa'
import PlayerAttributes from './SpecificPlayerAttributes'
import Ronaldo from './resources/images/Ronaldo.png'
import Messi from './resources/images/Messi.png'
import Neymar from './resources/images/Neymar.png'
import DeGea from './resources/images/DeGea.png'
import Bruyne from './resources/images/Messi.png'


const PlayerFound = ({playerObject}) => {

    const iconStyling = {
        height: '30', 
        width: '30',  
        marginRight: '5px', 
        display: 'inline'
    };

    let imgSrc;

    if(playerObject.Name === 'Cristiano Ronaldo')
        imgSrc = Ronaldo;
    else if(playerObject.Name === 'L. Messi')
        imgSrc = Messi;
    else if(playerObject.Name === 'Neymar Jr')
        imgSrc = Neymar;
    else if(playerObject.Name === 'De Gea')
        imgSrc = DeGea;
    else
        imgSrc = Bruyne;

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
                        <img src={imgSrc} alt={playerObject.Name} height={70} width={70}/>
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