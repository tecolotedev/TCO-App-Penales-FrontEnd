import React from 'react';
import './css/Tabs.css';
import axios from 'axios';
const Tabs = props=>{
    let nombreReflog = React.createRef();
    let passReflog = React.createRef();


    let nombreRef = React.createRef();
    let passwordRef = React.createRef();
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
        const password = passwordRef.current.value;
        axios.post('/registro',{nombre,correo,password}).then(res=>{
            console.log(res);
            if(res.data.ok){
                localStorage.setItem('token',res.data.token);
                props.setToken(res);
            }else{
                console.log(res.data.err.errors.correo.message);
            }
        }).catch(err=>console.log(err));
        e.currentTarget.reset();
    }
    return(
        <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    <li className="tab col s6 active"><a  href="#test1">Ingresar </a></li>
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
                        <input type="password"  ref={passwordRef}/>
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