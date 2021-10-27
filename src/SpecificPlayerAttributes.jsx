import React from 'react';

const specificPlayerAttributes = ({player}) => {
    return(
        <>
            <ul>
                <li>Age &nbsp;&nbsp;&nbsp;<span>{player.Age}</span></li>
                <li>Height &nbsp;&nbsp;&nbsp;<span>{player.Height}</span></li>
                <li>Weight &nbsp;&nbsp;&nbsp;<span>{player.Weight}</span></li>
                <li>Nationality &nbsp;&nbsp;&nbsp;<span>{player.Nationality}</span></li>
                <li>Preferred Foot &nbsp;&nbsp;&nbsp;<span>{player.PreferredFoot}</span></li>
                <li>Position &nbsp;&nbsp;&nbsp;<span>{player.Position}</span></li>
                <li>Jersey Number &nbsp;&nbsp;&nbsp;<span>{player.JerseyNumber}</span></li>
                <li>Work Rate(Attack - Defense) &nbsp;&nbsp;&nbsp;<span>{player.WorkRate}</span></li>
                <li>Club &nbsp;&nbsp;&nbsp;<span>{player.Club}</span></li>
                <li>Value &nbsp;&nbsp;&nbsp;<span>{player.Value}</span></li>
                <li>Wage &nbsp;&nbsp;&nbsp;<span>{player.Wage}</span></li>
                <li>Joined &nbsp;&nbsp;&nbsp;<span>{player.Joined}</span></li>
                <li>Contract Valid Until &nbsp;&nbsp;&nbsp;<span>{player.ContractValidUntil}</span></li>
            </ul>
        </>
    )
}

export default specificPlayerAttributes;