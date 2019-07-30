import React from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

const FormPenales = props=>{
    let equipo1Ref = React.createRef();
    let equipo2Ref = React.createRef();
    let ligaRef = React.createRef();
    let urlRef = React.createRef();

    const onPublish=e=>{
        e.preventDefault();
        let equipo1 = equipo1Ref.current.value;
        let equipo2 = equipo2Ref.current.value;
        let liga = ligaRef.current.value;
        let url = urlRef.current.value;
        if(equipo1===''||equipo2===''||liga===''||url===''){
            Swal.fire({
                text: 'Datos incompletos',
                type: 'error',
                confirmButtonText: 'ok'
            });
            return
        }
        const data = {equipo1,equipo2,liga,url};
        axios.post('/penales',data).then(res=>{
            console.log(res);
            Swal.fire({
                text: 'Se verificara la veracidad del post antes de ser publicado',
                type: 'success',
                confirmButtonText: 'Cool'
            });
        }).catch(err=>{
            console.log(err);
            Swal.fire({
                text: 'Oops algo salio mal, intentelo mas tarde',
                type: 'error',
                confirmButtonText: 'ok'
            });
        });
        
        
        e.currentTarget.reset()
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h6 ><a className="red-text modal-trigger " href="#modalform">Publica un partido para la comunidad</a></h6>
                    <div className="modal" id="modalform">
                        <div className="modal-content">
                            <form onSubmit={onPublish}>
                                <div className="row">
                                    <div className="col s4">
                                        <div className="input-field">
                                            <input type="text" ref={equipo1Ref} />
                                            <label htmlFor="autocomplete-input">Equipo 1</label>
                                        </div>
                                    </div>
                                    <div className="col s4">
                                        <div className="input-field">
                                            <input type="text"  ref={equipo2Ref}/>
                                            <label htmlFor="autocomplete-input">Equipo 2</label>
                                        </div>
                                    </div>
                                    <div className="col s4">
                                        <div className="input-field">
                                            <input type="text" ref={ligaRef} />
                                            <label htmlFor="autocomplete-input">Liga</label>
                                        </div>
                                    </div>
                                    <div className="col s12">
                                        <div className="input-field">
                                            <input type="text" ref={urlRef} />
                                            <label htmlFor="autocomplete-input">URL del partido</label>
                                        </div>
                                    </div>
                                    <button className="btn right red" type="submit">Publicar</button>
                                </div>
                            </form>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    );
}
export default FormPenales;
