import React from 'react';
import './css/InfoPenales.css';
import Penales from './Penales.jsx';
const InfoPenales = props =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s6"><a className="active" href="#aprobados">Aprobados </a></li>
                        <li className="tab col s6"><a  href="#pendientes">Pendientes por verificar</a></li>
                    </ul>
                </div>

                <div id="aprobados" className="col s12">
                    <Penales penales={props.penalesA}/>
                </div>
                <div id="pendientes" className="col s12">
                    <Penales penales={props.penalesP}/>
                </div>
            </div>
        </div>
    );
}
export default InfoPenales;