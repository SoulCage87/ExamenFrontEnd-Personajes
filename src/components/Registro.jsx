import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const baseUrl = import.meta.env.MY_APP_URL;

export const Registro = () => {
const navigate = useNavigate();

const [formPost, setFormPost] = useState({
    nombre_usuario: '',
    correo_electronico: '',
    imagen: '',
    contrasena: '',
    confirmacion_con: ''
})

const onChangeHandler = (event) => {

    const { name, value } = event.target;
    if (name === "imagen") {

        const img = event.target.files[0];
        setFormPost({ ...formPost, [name]: img });
        return;

    }
    setFormPost({ ...formPost, [name]: value });
    console.log(value)
}

const onSubmit = async (event) => {

    const url = baseUrl + `/user`

    event.preventDefault();

    try {
        const datosFormulario = new FormData();

    datosFormulario.append("nombre_usuario", formPost.nombre_usuario);
    datosFormulario.append("correo_electronico", formPost.correo_electronico);
    datosFormulario.append("imagen", formPost.imagen);
    datosFormulario.append("contrasena", formPost.contrasena);
    datosFormulario.append("confirmacion_con", formPost.confirmacion_con);

    const result = await axios.post(url, datosFormulario);
    const resultData = (await result).data;

    navigate('/muro')
    } catch (error) {
       console.log(error)
       let err = document.getElementById('error') 
       err.innerHTML = `<p classname= "fs-5">Error al Registrarse</p>`
    }

}

    return (
        <>
        <form onSubmit={onSubmit}>
            <div className="card position-absolute top-50 start-50 translate-middle shadow-lg">
                <div className="card-body">
                    <h5 className="card-title text-center">Registrate</h5>
                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nombre de Usuario</span>
                        <input type="text" className="form-control" name='nombre_usuario' onChange={onChangeHandler}/>
                    </div>
                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Correo Electronico</span>
                        <input type="text" className="form-control" name='correo_electronico'  onChange={onChangeHandler}/>
                    </div>
                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Foto de Perfil</span>
                        <input type="file" className="form-control" name='imagen'  onChange={onChangeHandler}/>
                    </div>
                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Contraseña</span>
                        <input type="text" className="form-control" name='contrasena'  onChange={onChangeHandler}/>
                    </div>
                    <div className="input-group mb-3 mt-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Confirmacion Contraseña</span>
                        <input type="text" className="form-control" name='confirmacion_con'  onChange={onChangeHandler}/>
                    </div>
                    <div className="text-center mb-3">
                    <button type="submit" className="btn btn-outline-primary">Registrate</button>
                    </div>
                    <div id='error' className='text-center' style={{color: 'red'}}>

                    </div>
                </div>
            </div>
            </form>
        </>
    )
}
