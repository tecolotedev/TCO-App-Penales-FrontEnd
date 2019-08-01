import React from 'react';

//Components
import NavBar from '../Components/NavBar.jsx';
import FormPenales from '../Components/FormPenales.jsx';
import InfoPenales from '../Components/InfoPenales.jsx';
const Home = props=>{
    return(
        <div>
            <NavBar token={props.token} setToken={props.setToken}/>
            <FormPenales/>
            <InfoPenales penalesP={props.penalesP} penalesA={props.penalesA}/>
        </div>
    );
}

export default Home;