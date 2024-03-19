import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const baseUrl = import.meta.env.MY_APP_URL;

export const EditPersonaje = () => {
const {idPer} = useParams();
const navigate = useNavigate();

const [edit, setEdit] = useState({
    descripcion: ''
})

const onChange = (event) => {
    const { name, value } = event.target

    setEdit({ ...edit, [name]: value })
}

const onSubmithandler = async (event) => {
    try {
        event.preventDefault();
    const url = baseUrl + `/personaje/${idPer}`
    const result = await axios.put(url, edit)
    const resultData = (await result).data; 
    navigate('/muro')
    } catch (error) {
        console.error(error.message)
    }
   
}

  return (
    <>
     <form onSubmit={onSubmithandler}>
                <div className="card mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle" style={{ maxWidth: '640px', maxHeight: '500px' }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Edita la descipcion de tu personaje</h5>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" name='descripcion' onChange={onChange} placeholder='descripcion...'  />
                        </div>
                        <button className='btn btn-outline-warning' type='submit'>Editar <img src="" alt="" style={{ width: '20px' }} /> </button>
                    </div>
                </div>
            </form>
    </>
  )
}
