import React from 'react';
import Penal from './Penal.jsx';
const Penales = props =>{
    if(!props.penales)return null
    return(
        <div className="row">
            {Object.keys(props.penales).map(key=>{
                return(<Penal key={key} penal={props.penales[key]}/>)
            })}
        </div>
    );
}
export default Penales;
