import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabs from './Tabs.jsx';
const  NavBar =props=>{   
    const salir=()=>{
        localStorage.removeItem('token');
        props.setToken(null);
    }
    let mensaje = '';
    if(props.token) mensaje = <span onClick={salir} >Salir</span>;
    else mensaje = 'Ingresar'
    return(
        <React.Fragment>
            <nav>
                <div className="nav-wrapper blue">
                    <a className="waves-effect waves-light modal-trigger brand-logo right " href="#modal1">{mensaje}</a>
                </div>
            </nav>

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <Tabs setToken={props.setToken}/>
                </div>
            </div>
        </React.Fragment>
    );
}
export default NavBar;