import axios from 'axios'

import {useState} from 'react'
import { useNavigate} from 'react-router-dom'

const URI ='http://localhost:8000/estudiantes/'

const CompCrearEstudiante=()=>{
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const navigate = useNavigate()

    //Procedimiento guardar
    const guardarAlumno = async(e)=>{
        e.preventDefault()
        await axios.post(URI,{nombre: nombre, apellido:apellido, correo:correo, contraseña:contraseña})
        navigate('/')
    }
    return (
        <div>
            <h3>Registrar Alumno</h3>
            <form onSubmit={guardarAlumno}>
                <div className='row'>
                    <div className='col-col-6'>
                        <label className='form-label '> Nombre
                            <input
                            value={nombre}
                            onChange={(e)=>setNombre(e.target.value)}
                            type='text'
                            className='form-control'
                            />
                        </label>
                        <label className='form-label '> Apellido
                            <input className='form-control ' type='text' value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
                        </label>
                    </div>
                    <div className='col-col-6'>
                        <label className='form-label '>Correo Electronico
                            <input className='form-control ' type='email' value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
                        </label>
                        <label className='form-label '> Contraseña
                            <input className='form-control ' type='password' value={contraseña} onChange={(e)=>setContraseña(e.target.value)}/>
                        </label>
                    </div>
                    <button type='submit' className='btn btn-primary'>Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCrearEstudiante