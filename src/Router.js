import React,{useState,useEffect} from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

//Views
import Home from './Views/Home.jsx';

const Router = props=>{
    let tokenLS=localStorage.getItem('token');
    const [penalesP,setPenalesP] = useState(null);
    const [penalesA,setPenalesA] = useState(null);
    const [token,setToken] = useState(tokenLS);
    useEffect(()=>{
        axios.get('/penalesp').then(res=>setPenalesP(res.data.penalesP)).catch(err=>console.log(err));
        axios.get('/penalesA').then(res=>setPenalesA(res.data.penalesA)).catch(err=>console.log(err));
    },[]);
    console.log(token)
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={props=>{
                    return(<Home penalesP={penalesP} penalesA={penalesA} token={token} setToken={setToken}/>);
                }}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;