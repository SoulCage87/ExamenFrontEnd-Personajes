import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Muro = () => {
const navigate = useNavigate();
    const pelicula = () => {
    navigate('/pelicula')
    }

 const registrar = () => {
    navigate('/registroPersonaje')
 }   
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
                    <div className="card shadow-lg col-4 mx-3" style={{ width: '18rem' }}>
                        <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Personaje</h5>
                            <p className="card-text">Descripcion del Personaje</p>
                            <p className="btn btn-outline-warning">Editar</p>
                            <p className="btn btn-outline-danger mx-2">Eliminar</p>
                        </div>
                    </div>
                    <div className="card shadow-lg col-4 mx-3" style={{ width: '18rem' }}>
                        <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Personaje</h5>
                            <p className="card-text">Descripcion del Personaje</p>
                        </div>
                    </div>
                    <div className="card shadow-lg col-4 mx-3" style={{ width: '18rem' }}>
                        <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Personaje</h5>
                            <p className="card-text">Descripcion del Personaje</p>
                        </div>
                    </div>
                    <div className="card shadow-lg col-4 mx-3" style={{ width: '18rem' }}>
                        <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top p-1" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Personaje</h5>
                            <p className="card-text">Descripcion del Personaje</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
