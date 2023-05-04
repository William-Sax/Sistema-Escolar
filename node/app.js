import express  from "express"
//const morgan =require('morgan')
import cors from 'cors'
import db from './database/db.js';
import blogRoutes from './routes/routes.js'


//Setting
//app.set('port', process.env.PORT || 8000)

const app = express()
//Midleeware 
//app.use(morgan('dev'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/estudiantes', blogRoutes)

//Route

//  Static files 

//Conexion a la base de datos

app.listen(8000,()=>{
    console.log('Conexion exitosa en http://localhost:8000/')
})
