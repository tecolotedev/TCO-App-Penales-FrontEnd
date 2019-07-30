import React from 'react';
import PenalP from './PenalP.jsx';
const PenalesP = props =>{
    if(!props.penalesP)return null
    return(
        <div className="row">
            {Object.keys(props.penalesP).map(key=>{
                return(<PenalP key={key} penalP={props.penalesP[key]}/>)
            })}
        </div>
    );
}
export default PenalesP;
