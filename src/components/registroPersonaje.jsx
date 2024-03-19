import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const baseUrl = import.meta.env.MY_APP_URL;

export const RegistroPersonaje = () => {

    const navigate = useNavigate();
    const [Form, setForm] = useState({
        nombre: '',
        descripcion: '',
        imagen: ''
    })

    const onChangeHandler = (event) => {

        const { name, value } = event.target;
        if (name === "imagen") {

            const img = event.target.files[0];
            setForm({ ...Form, [name]: img });
            return;

        }
        setForm({ ...Form, [name]: value });
        console.log(value)
    }

    const onSubmit = async (event) => {

        const url = baseUrl + `/personaje`

        event.preventDefault();

        try {
            const datosFormulario = new FormData();

            datosFormulario.append("nombre", Form.nombre);
            datosFormulario.append("descripcion", Form.descripcion);
            datosFormulario.append("imagen", Form.imagen);

            const result = await axios.post(url, datosFormulario);
            const resultData = (await result).data;

            navigate('/muro')
        } catch (error) {
            console.log(error)
            let err = document.getElementById('error')
            err.innerHTML = `<p classname= "fs-5">Error al Registrar</p>`
        }

    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="card position-absolute top-50 start-50 translate-middle shadow-lg">
                    <div className="card-body">
                        <h5 className="card-title text-center">Registra tu personaje</h5>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                            <input type="text" className="form-control" name='nombre' onChange={onChangeHandler} />
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Descripcion</span>
                            <input type="text" className="form-control" name='descripcion' onChange={onChangeHandler} />
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">imagen</span>
                            <input type="file" className="form-control" name='imagen' onChange={onChangeHandler} />
                        </div>
                        <div className="text-center mb-3">
                            <button type="submit" className="btn btn-outline-primary">Registrar</button>
                        </div>
                        <div id='error' className='text-center' style={{ color: 'red' }}>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
