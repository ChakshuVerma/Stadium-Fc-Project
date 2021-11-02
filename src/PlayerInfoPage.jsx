import React,{useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {csv} from 'd3';
import CSVDATA from './resources/data.csv'
import './/resources/css/playerstats.css';
import PlayerFound from './PlayerFound';
import PlayerNotFound from './PageNotFound'

const PlayerInfoPage = () => {
    
    const [DataArray, setdata] = useState([]);
    const loading = useRef(true);

    useEffect(()=>{
        const csvToJs = async () =>{
            try{
                const data = await csv(CSVDATA);
                setdata(data);
            }
            catch(error){
                console.log(error);
            }
        }
        csvToJs();
    }, [])


    const {name} = useParams();
    let playerFoundAt = false;
 
    for(var i=0; i<DataArray.length; i++){
        loading.current = false;
        if(DataArray[i].Name === name){
            playerFoundAt = i;
            break;
        }
    }
    
    if(playerFoundAt===false){
        if(loading.current===true)
            return(
                null
            )
        else
            return(
                <PlayerNotFound/>
            )
    }
    else{
        let playerObject = DataArray[playerFoundAt];
        let Average = parseInt((parseInt(playerObject.Crossing)+ parseInt(playerObject.Finishing)+ parseInt(playerObject.HeadingAccuracy)+ parseInt(playerObject.ShortPassing)+ parseInt(playerObject.Volleys))/parseInt(5));
        playerObject.Potential = Average+parseInt(Average/10);
        playerObject.Potential = playerObject.Potential>playerObject.Overall?playerObject.Potential:parseInt(playerObject.Overall)+parseInt(2);

        return(
            <PlayerFound playerObject={playerObject}/>
        )
    }
}

export default PlayerInfoPage;