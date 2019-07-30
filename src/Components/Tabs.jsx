import React from 'react';
import './css/Tabs.css';
const Tabs = props=>{
    let nombreReflog = React.createRef();
    let passReflog = React.createRef();


    let nombreRef = React.createRef();
    let passRef = React.createRef();
    let correoRef =  React.createRef();
    const onLogin=e=>{
        e.preventDefault();
        let nombre = nombreReflog.current.value;
        let pass = passReflog.current.value;
        console.log(nombre,pass)
    }
    const onRegistro=e=>{
        e.preventDefault();
        const nombre = nombreRef.current.value;
        const correo = correoRef.current.value;
        const pass = passRef.current.value;

        console.log(nombre,correo,pass)
        
    }
    return(
        <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    <li className="tab col s6"><a  href="#test1">Ingresar </a></li>
                    <li className="tab col s6"><a  href="#test2">Crea una cuenta Nueva</a></li>
                </ul>
            </div>
            <div id="test1" className="col s12">
                <form onSubmit={onLogin}>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input type="text"  ref={nombreReflog}/>
                        <label htmlFor="autocomplete-input">Nombre</label>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">https</i>
                        <input type="password"  ref={passReflog}/>
                        <label htmlFor="autocomplete-input">Contraseña</label>
                    </div>
                    <div className="input-field col s12">
                        <button className="btn full-button" type="submit">Ingresar</button>
                    </div>
                </form>
            </div>
            <div id="test2" className="col s12">
                <form onSubmit={onRegistro}>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input type="text"  ref={nombreRef}/>
                        <label htmlFor="autocomplete-input">Nombre</label>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input type="text"  ref={correoRef}/>
                        <label htmlFor="autocomplete-input">Correo</label>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">https</i>
                        <input type="password"  ref={passRef}/>
                        <label htmlFor="autocomplete-input">Contraseña</label>
                    </div>
                    <div className="input-field col s12">
                        <button className="btn full-button" type="submit">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Tabs;