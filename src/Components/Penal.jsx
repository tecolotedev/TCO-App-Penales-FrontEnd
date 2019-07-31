import React,{useState} from 'react';
import './css/PenalP.css';
import axios from 'axios';


const Penal = props =>{
    let {equipo1,equipo2,liga,url,votosPositivos,votosNegativos,_id,votado} = props.penal;
    const [positivos,setPositivos] = useState(votosPositivos);
    const [negativos,setNegativos] = useState(votosNegativos);
    const [votacion,setVotacion] = useState(votado)
    const calificacion= flecha => e =>{
        if(votacion!==0)return;
        axios.put('/penalesp',{_id,flecha}).then(res=>console.log(res)).catch(err=>console.log(err));
        if(flecha==="up"){
            setPositivos(positivos+1);setVotacion(1);
        }
        else{ 
            setNegativos(negativos+1);setVotacion(-1);
        }
    }

    let colorTextoUp='blue-grey-text lighten-5';
    let colorTextoDown='blue-grey-text lighten-5';
    if(votacion===-1)colorTextoDown='red-text';
    else if(votacion===1)colorTextoUp='green-text';
    return(
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-content ">
                    <p className="center">{`${equipo1} vs ${equipo2}`}</p>
                    <p className="center">{`Liga: ${liga}`}</p>
                    <p className="center" ><a  href={url} target="_blank" rel="noopener noreferrer">Ver Penales</a></p>
                    <p className={`left ${colorTextoUp}`} onClick={calificacion('up')}>
                        <i className="material-icons" id="iconup">thumb_up</i><span className={`badge ${colorTextoUp}`} id="cssbadgeup">{positivos}</span>
                    </p>
                    <p className={`right ${colorTextoDown}`} onClick={calificacion('down')}> 
                        <i className="material-icons" id="icondown">thumb_down</i><span className={`badge ${colorTextoDown}`} id="cssbadgedown">{negativos}</span>
                    </p>
                </div>
                
            </div>
        </div>
    );
}
export default Penal;