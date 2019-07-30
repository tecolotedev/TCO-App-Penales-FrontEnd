import React from 'react';

//Components
import NavBar from '../Components/NavBar.jsx';
import FormPenales from '../Components/FormPenales.jsx';
import InfoPenales from '../Components/InfoPenales.jsx';
const Home = props=>{
    return(
        <div>
            <NavBar/>
            <FormPenales/>
            <InfoPenales penalesP={props.penalesP}/>
        </div>
    );
}

export default Home;