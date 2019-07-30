import React from 'react';
import './css/PenalP.css';

const PenalP = props =>{
    console.log(props.penalP);
    let {equipo1,equipo2,fechaPublicacion,liga,url,votosPositivos,votosNegativos} = props.penalP
    return(
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-content ">
                    <p className="center">{`${equipo1} vs ${equipo2}`}</p>
                    <p className="center">{`Liga: ${liga}`}</p>
                    <p className="center" ><a  href={url} target="_blank" rel="noopener noreferrer">Ver Penales</a></p>
                    <p className="left">
                        <i className="material-icons" id="iconup">thumb_up</i><span className="badge" id="cssbadgeup">{votosPositivos}</span>
                    </p>
                    <p className="right"> 
                        <i className="material-icons" id="icondown">thumb_down</i><span className="badge"id="cssbadgedown">{votosNegativos}</span>
                    </p>
                </div>
                
            </div>
        </div>
    );
}
export default PenalP;