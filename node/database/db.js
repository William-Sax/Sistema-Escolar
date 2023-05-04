import mongoose from 'mongoose';

const url ='mongodb://127.0.0.1:27017/SistemaEscolar'
mongoose.connect(url)

const db = mongoose.connection
 db.on('open',()=>{console.log("Conectado a la base de datos")})
 db.on('error',()=>{console.log("Error en la conexion")})
 export default db