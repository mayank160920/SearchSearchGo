import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import SearchResults from './SearchResults';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/search" />
            </Route>
            <Route exact path={["/search","/images","/news"]}>
                <SearchResults />
            </Route>
        </Switch>
    )
}

export default Routes;
