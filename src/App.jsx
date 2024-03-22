import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Registro } from './components/Registro'
import { Muro } from './components/Muro'
import { Pelicula } from './components/Pelicula'
import { RegistroPersonaje } from './components/registroPersonaje'
import { EditPersonaje } from './components/EditPersonaje'
import { RegistrarPelicula } from './components/RegistrarPelicula'



function App() {


  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body"  data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Api Personajes</span>
        </div>
      </nav>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registro/>} />
        <Route path='/muro' element={<Muro />} />
        <Route path='/pelicula' element={<Pelicula />} />
        <Route path='/registroPersonaje' element={<RegistroPersonaje />} />
        <Route path='/edit/:idPer' element={<EditPersonaje />} />
        <Route path='/RegistroPelicula' element={<RegistrarPelicula />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
