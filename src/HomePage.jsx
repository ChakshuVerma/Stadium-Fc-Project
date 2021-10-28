import React,{useState} from 'react';
import "./resources/css/homepage.css";
import {Link} from 'react-router-dom';
import SearchResults from "./SearchResults";

const HomePage = () =>{
    
    const [searchParameter, changesearchParameter] = useState('Name');
    const [searchQuery, changeSearchQuery] = useState('');

    const searchParameterChanged = (event) =>{
        let str = event.target.value;
        changesearchParameter(str); 
    }

    const searchData = (event) =>{
        let str = event.target.value;
        changeSearchQuery(str);
    }

    return(
        <>
            <div className="container-div">
                <div className="navbar">
                    <Link to="/"><h1 id="heading">FIFA<span>12</span></h1></Link> 
                </div>
                <div className="search-div">
                    <select id="select-search-attr" value={searchParameter} onChange={searchParameterChanged}>
                        <option value="Name">Name</option>
                        <option value="Nationality">Nationality</option>
                        <option value="Club">Club</option>
                        <option value="Position">Position</option>
                    </select>
                    <div className="list-container">
                        <input type="text" placeholder={`Enter ${searchParameter}`} onChange={searchData} value={searchQuery}/>
                        <ul><SearchResults SQ={searchQuery} SP={searchParameter}/></ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage