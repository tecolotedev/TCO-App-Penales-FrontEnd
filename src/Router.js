import React,{useState,useEffect} from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

//Views
import Home from './Views/Home.jsx';

const Router = props=>{
    const [penalesP,setPenalesP] = useState(null);
    useEffect(()=>{
        axios.get('/penalesp').then(res=>setPenalesP(res.data.penalesP)).catch(err=>console.log(err));
    },[]);
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={props=>{
                    return(<Home penalesP={penalesP}/>);
                }}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;