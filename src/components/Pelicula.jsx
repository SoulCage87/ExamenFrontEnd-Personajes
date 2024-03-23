import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const baseUrl = import.meta.env.MY_APP_URL;
import axios from 'axios';

export const Pelicula = () => {
const navigate = useNavigate();

const personaje = () => {
    navigate('/muro')
}

const register = () => {
    navigate('/RegistroPelicula')
}

const update = (idPel) => {
  navigate(`/UpdateMovie/${idPel}`)
}


const [getPelicula,setGetPelicula] = useState([]);
const [borrar, setBorrar] = useState(0)

const getDatos = async () => {
    try {
        const url = baseUrl + `/pelicula`
        const result = await axios.get(url)
        const datos = result.data
        setGetPelicula(datos);  
    } catch (error) {
        console.error(error.message)
    }
   
}

const dltDatos = async (id) => {
try{
  const url = baseUrl + `/pelicula/${id}`
  const result = await axios.delete(url)
  const datos = result.data
  setBorrar(borrar + 1)
}catch(e){
    console.error(e.message)
}
}

useEffect(() => {
    getDatos();
}, [borrar])

    return (
        <>
            <div className="container mt-3">
                <div className="row mt-3">
                    <div className="card shadow-lg col-6 mx-3" style={{ width: '18rem' }}>

                        <div className="card-body">
                            <h5 className="card-title">Registra tu pelicula</h5>
                            <p className="btn btn-outline-success" onClick={register}>Registrar</p>

                        </div>
                    </div>
                    <div className="card shadow-lg col-6 mx-3" style={{ width: '18rem' }}>

                        <div className="card-body">
                            <h5 className="card-title">Personajes</h5>
                            <p className="btn btn-outline-primary" onClick={personaje}>ir a Personajes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="text-center"><h2>Registro de Peliculas</h2></div>
                <div className="row mt-3">
                    {
                        getPelicula.map((pelicula) => (
                            <div key={pelicula.id} className="card shadow-lg col-4 mx-3 mt-3" style={{ width: '18rem' }}>
                            <img src={`data: ${pelicula.mime_type};base64,${pelicula.imagen}`} className="card-img-top p-1" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{pelicula.titulo}</h5>
                                <h6 className="card-title">Año de Lanzamiento: {pelicula.anio_lanzamiento}</h6>
                                <h6 className="card-title">Director: {pelicula.nombre}</h6>
                                <p className="card-text">Genero: {pelicula.genero}</p>
                                <p className="card-text">Sinopsis: {pelicula.sinopsis}</p>
                                <p className="btn btn-outline-warning" onClick={() => update(pelicula.id)}>Editar</p>
                                <p className="btn btn-outline-danger mx-2" onClick={() => dltDatos(pelicula.id)}>Eliminar</p>
                            </div>
                        </div>
                        ))
                    }
                   
                  
                </div>
            </div>
        </>
    )
}
