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
        return <h3 style={{color: 'green', textAlign: 'center', fontSize: '1.9rem'}}>Type Something..</h3>;
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
                    return <li key={index}><Link to={`/playerinfo/${val.Name}`}>{val.Name}{SP==="Name"?'':' - '+currValue}</Link></li>
                }
                else
                    return null;
            })

        );
    }   
        
}

export default SearchResults;