import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const baseUrl = import.meta.env.MY_APP_URL;
export const RegistrarPelicula = () => {

    const navigate = useNavigate();
    const [Form, setForm] = useState({
        nombre: '',
        titulo: '',
        genero: '',
        anio_lanzamiento: '',
        sinopsis: '',
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

        const url = baseUrl + `/pelicula`

        event.preventDefault();

        try {
            const datosFormulario = new FormData();

            datosFormulario.append("nombre", Form.nombre);
            datosFormulario.append("titulo", Form.titulo);
            datosFormulario.append("genero", Form.genero);
            datosFormulario.append("anio_lanzamiento", Form.anio_lanzamiento);
            datosFormulario.append("sinopsis", Form.sinopsis);
            datosFormulario.append("imagen", Form.imagen);

            const result = await axios.post(url, datosFormulario);
            const resultData = (await result).data;

            navigate('/Pelicula')
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <>
      <form onSubmit={onSubmit}>
                <div className="card position-absolute top-50 start-50 translate-middle shadow-lg">
                    <div className="card-body">
                        <h5 className="card-title text-center">Registra tu personaje</h5>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre del director</span>
                            <input type="text" className="form-control" name='nombre' onChange={onChangeHandler}/>
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">titulo </span>
                            <input type="text" className="form-control" name='titulo' onChange={onChangeHandler}/>
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Año de Lanzamiento </span>
                            <input type="text" className="form-control" name='anio_lanzamiento' onChange={onChangeHandler}/>
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Genero </span>
                            <input type="text" className="form-control" name='genero' onChange={onChangeHandler}/>
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Sinopsis </span>
                            <input type="text" className="form-control" name='sinopsis' onChange={onChangeHandler}/>
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Poster</span>
                            <input type="file" className="form-control" name='imagen' onChange={onChangeHandler}/>
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
