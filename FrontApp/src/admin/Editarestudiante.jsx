import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const  URI = 'http://localhost:8000/estudiantes/'

const EditarAlumno =()=>{
    const [nombre, setNombre]=useState('')
    const [apellido, setApellido]=useState('')
    const [correo, setCorreo]=useState('')
    const navigate = useNavigate()
    const {_id} = useParams()


    const actualizar =async(e)=>{
        e.preventDefault()
        await axios.put(`${URI}${_id}`,{
            nombre:nombre,
            apellido:apellido,
            correo:correo
        })

        navigate('/')
    }
    useEffect( ()=>{
        estudianteId()
    },[])

    const estudianteId = async () => {
        const res = await axios.get(`${URI}$_id`)
        setNombre(res.data.nombre)
        setApellido(res.data.apellido)
        setCorreo(res.data.correo)
    }
    return(
        <div>
            <h3>Actualizar datos del alumono</h3>
            <form onSubmit={actualizar}>
                <div className='row'>
                    <div className='col-12 mb-3'>
                        <label className='form-label '> Nombre
                            <input value={nombre}onChange={(e)=>setNombre(e.target.value)} type='text' className='form-control'/>
                        </label>
                        <label className='form-label '> Apellido
                            <input value={apellido} className='form-control ' type='text'  onChange={(e)=>setApellido(e.target.value)}/>
                        </label>
                        <label className='form-label '>Correo Electronico
                            <input className='form-control ' type='email' value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
                        </label>
                    </div>
                    <button type='submit' className='btn btn-primary'>Actualizar</button>
                </div>
            </form>
        </div>
    )
}

export default EditarAlumno