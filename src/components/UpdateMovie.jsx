import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const baseUrl = import.meta.env.MY_APP_URL;

export const UpdateMovie = () => {
    const { idPel } = useParams();
    const navigate = useNavigate();

    const [edit, setEdit] = useState({
        sinopsis: ''
    })
    
    const onChange = (event) => {
        const { name, value } = event.target
    
        setEdit({ ...edit, [name]: value })
    }

    const onSubmithandler = async (event) => {
        try {
            event.preventDefault();
            const url = baseUrl + `/pelicula/${idPel}`;
            const result = await axios.put(url, edit);
            const resultData = (await result).data;
            navigate('/pelicula')
        } catch (error) {
            console.error(error.message);
        }

    }


    return (
        <>
            <form onSubmit={onSubmithandler}>
                <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle" style={{ maxWidth: '640px', maxHeight: '500px' }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Sinopsis Editar</h5>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" name='sinopsis' onChange={onChange} placeholder='Sinopsis' />
                        </div>
                        <button className='btn btn-outline-warning' type='submit'>Editar <img src="" alt="" /> </button>
                        <div id='err' className='text-card' style={{color: 'red'}}></div>
                    </div>
                </div>
            </form>
        </>
    )
}
