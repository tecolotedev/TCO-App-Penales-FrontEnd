import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabs from './Tabs.jsx';
const  NavBar =props=>{   
    let login = false;
    let mensaje = '';
    if(login) mensaje = 'Salir';
    else mensaje = 'Ingresar'
    return(
        <React.Fragment>
            <nav>
                <div className="nav-wrapper indigo">
                    <a className="waves-effect waves-light modal-trigger brand-logo right " href="#modal1">{mensaje}</a>
                </div>
            </nav>

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <Tabs/>
                </div>
            </div>
        </React.Fragment>
    );
}
export default NavBar;