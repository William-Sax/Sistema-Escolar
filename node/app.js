import express from "express"
import cors from 'cors'


//Conexion a la base de datos

import db from './database/db.js';
import blogRoutes from './routes/routes.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use('/estudiantes', blogRoutes)



app.listen(8000,()=>{
    console.log('Conexion exitosa en http://localhost:8000/')
})
