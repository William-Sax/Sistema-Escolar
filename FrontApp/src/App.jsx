import tiktok from './assets/tiktok.svg'
import React from 'react'
import facebook from './assets/facebook.svg'
import whatsapp from './assets/whatsapp.svg'
import btnRegistrar from './assets/person.svg'
import gmail from './assets/gmail.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './estudiantes/Login'

function App() {
  return (
    <>
    <header className="header">
      <div className='logo'>
        <img src={tiktok} alt='tiktok'/>
        <img src={whatsapp} alt='whatsapp'/>
        <img src={facebook} alt='facebook'/>
        <img src={gmail} alt='gmail'/>
      </div>
      <nav>
        <ul className='nav-links'>
          <li><button id="b" type="submit" onSubmit={Login}><img src={btnRegistrar}   all='person'/>Iniciar sesion</button></li>
          <li><button  type="submit"><img src={btnRegistrar}  all='person'/>Registrarse</button></li>
        </ul>
      </nav>
    </header>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
