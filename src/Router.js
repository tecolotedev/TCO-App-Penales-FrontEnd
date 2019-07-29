import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';

//Views
import Home from './Views/Home.jsx';

const Router = props=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={props=>{
                    return(<Home/>);
                }}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;