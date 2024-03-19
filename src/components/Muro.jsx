import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const baseUrl = import.meta.env.MY_APP_URL;
import axios from 'axios';


export const Muro = () => {
const navigate = useNavigate();
    const pelicula = () => {
    navigate('/pelicula')
    }

 const registrar = () => {
    navigate('/registroPersonaje')
 }   

 const [getpersonaje,setGetpersonaje] = useState([]);
 const [borrar, setBorrar] = useState(0);

 const getDatos = async () => {
    try {
        const url = baseUrl + `/personaje`;
        const result = await axios.get(url);
        const datos = result.data;
        setGetpersonaje(datos);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

const deletePer = async (idPer) => {
     try {
        const url = baseUrl + `/personaje/${idPer}`
        const result = await axios.delete(url)
        const datos = result.data
        setBorrar(borrar + 1)
     } catch (e) {
        console.error(e.message)
     }
}

const editPersonaje = (idPer) => {
    navigate(`/edit/${idPer}`)
}

useEffect(() => {
    getDatos();
  }, [borrar]);

    return (
        <>

            <div className="container mt-3">
                <div className="row mt-3">
                    <div className="card shadow-lg col-6 mx-3" style={{ width: '18rem' }}>
                      
                        <div className="card-body">
                            <h5 className="card-title">Registra tu Personaje</h5>
                            <p className="btn btn-outline-success" onClick={registrar}>Registrar</p>
                            
                        </div>
                    </div>
                    <div className="card shadow-lg col-6 mx-3" style={{ width: '18rem' }}>
                       
                        <div className="card-body">
                            <h5 className="card-title">Peliculas</h5>
                            <p className="btn btn-outline-primary" onClick={pelicula}>ir a peliculas</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="text-center"><h2>Registro de Personajes</h2></div>
                <div className="row mt-3">
                    {
                        getpersonaje.map((personaje) => (
                            <div key={personaje.id} className="card shadow-lg col-4 mx-3 mt-3" style={{ width: '18rem' }}>
                            <img src={`data:${personaje.mime_type};base64,${personaje.imagen}`} className="card-img-top p-1" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{personaje.nombre}</h5>
                                <p className="card-text">{personaje.descripcion}</p>
                                <p className="btn btn-outline-warning" onClick={() => editPersonaje(personaje.id)}>Editar</p>
                                <p className="btn btn-outline-danger mx-2" onClick={() => deletePer(personaje.id)}>Eliminar</p>
                            </div>
                        </div>
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}
