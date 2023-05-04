import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/estudiantes/'

const CompShow=()=>{

    const [estudiantes, actualizarEstudiante]=useState([])
    useEffect(()=>{
        mostrarEstudiantes()
    },[])

    //Proceso para monstrar todos los estudiantes
    const mostrarEstudiantes = async ()=>{
        const res = await axios.get(URI)
        actualizarEstudiante(res.data)
    }
    //Proceso para eliminar estudiante
    const EliminarEstudiante = async(_id)=>{
        await axios.delete(`${URI}${_id}`)
        mostrarEstudiantes()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Acction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiantes.map((estudiante, index)=>(
                                <tr key={index}>
                                    <td>{estudiante.nombre}</td>
                                    <td>{estudiante.apellido}</td>
                                    <td>{estudiante.correo}</td>
                                    <td>
                                        {<Link to ={`/edit/${estudiante._id}`} className='btn btn-info'><i className="fa-solid fa-user-pen"></i></Link>}
                                        <button onClick={()=>EliminarEstudiante(estudiante._id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default CompShow