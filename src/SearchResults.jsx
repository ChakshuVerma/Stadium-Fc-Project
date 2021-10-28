import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {csv} from 'd3';
import CSVDATA from './resources/data.csv'

const SearchResults = ({SQ, SP}) => {

    // Get the csv data in array format
    const [DataArray, setdata] = useState([])

    useEffect(()=>{
        csv(CSVDATA).then(data => {
            setdata(data);
        })
    }, [])

    let trimmedSearchQuery = SQ.trim();
    
    if(trimmedSearchQuery==="")
        return null;
    else {
        return(
            DataArray.map((val, index) => {
                let searchValue = trimmedSearchQuery;
                let currValue;
            
                if(SP==='Name')
                    currValue = val.Name;
                else if(SP==='Club') 
                    currValue = val.Club;
                else if(SP==='Nationality')
                    currValue = val.Nationality;
                else
                    currValue = val.Position;

                searchValue = searchValue.toUpperCase();
                currValue = currValue.toUpperCase();

                if(currValue.includes(searchValue)){
                    return <Link key={index} to={`/playerinfo/${val.Name}`} style={{textDecoration: 'none'}}><li className="player-row">{val.Name}{SP==="Name"?'':' - '+currValue}</li></Link>
                }
                else
                    return null;
            })

        );
    }   
        
}

export default SearchResults;