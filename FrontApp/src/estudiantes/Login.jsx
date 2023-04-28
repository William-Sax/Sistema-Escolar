import React, { useState } from "react";
import './styles/css.css';
import logoLogin from './assets/img/logo.png';
import axios from "axios";
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'


axios.defaults.URI='http://localhost:8000'
//class Login extends React.Component {
export default function Login(){
    const [correo, setCorreo] = useState('');
    const [contraseña, setContrasena] = useState('');

    const login=async(e)=>{
        e.preventDefault();
        const estudiante = {correo,contraseña}
        const respuesta =await axios.post('/estudiantes', estudiante);
        console.log(respuesta);
        const message = respuesta.data.message
        if(message=='error'){
            Swal.fire({
                icon:'error',
                title: message,
                showConfirmButton: false,
                timer: 1500
            })

        }
        else{
            const token = respuesta.data.token
            const nombre = respuesta.data.nombre 
            const idUsuario =respuesta.data.id
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('nombre', nombre)
            sessionStorage.setItem('idUsuario', idUsuario)
            Swal.fire({
                icon:'success',
                title: message,
                showConfirmButton: false,
                timer: 1500
            })
            window.location.href='/sidebar.js'
        }
    }
    //render(){
    return(
        <React.Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src={logoLogin} width="180px" alt="User Icon" />
                        </div>
                        <br/>
                        <form onSubmit={login}>
                            <input type="email" id="login"  className="fadeIn second form-control" name="correo" placeholder="Correo electronico" onChange={e=>setCorreo(e.target.value)}/>
                            <div className='linea'></div>
                            <input type="password" id="password" className="fadeIn third form-control" name="contraseña" placeholder="Contraseña"onChange={e=>setContrasena(e.target.value)}/>
                            <div className='linea'></div>
                            <input type="submit" className="fadeIn fourth" value="Acceder" />
                        </form>
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
    //}
}

