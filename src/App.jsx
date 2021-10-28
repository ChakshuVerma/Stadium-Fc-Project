import React from "react";
import Help from './Help';
import HomePage from './HomePage';
import PlayerInfoPage from './PlayerInfoPage';
import PageNotFound from './PageNotFound';
import {Route, Switch} from 'react-router-dom'

const App = () =>{

    return(
        <>
            <Switch>
                <Route exact path ="/" component={HomePage}/>
                <Route exact path ="/playerinfo/:name" component={PlayerInfoPage}/>
                <Route exact path ="/help" component={Help}/>
                <Route exact path ="*" component={PageNotFound}/>
            </Switch>
        </>
    );
}

export default App;