import BlogModel from "../models/BlogModel.js";


//Metodos par el crud


//Mostrar todos los registros
export const registros =async (req, res)=>{
    try{
        const estudiantes = await BlogModel.find()
        res.status(200).json(estudiantes)
    }catch(error){
        res.json({message: error.message})

    }
}

//Crear un registro
export const crearRegistro = async(req,res)=>{
    try{
        await BlogModel.create(req.body)
        res.status(200).json({
            "message": "Alumno matriculado correctamente"
        })
    }catch(error){
        res.json({message:error.message})
    }
}

//Actualizar registro
export const actualizarRegistro = async(req,res)=>{
    try{
        const id = req.params.id
        await BlogModel.updateOne({_id: id},req. body).then(res=>{
            console.log(res)
        })
        res.status(200).json({
            "message":"Alumno actualizado correctamente"
        })
    }catch(error){
        res.json({message:error.message})
    }
}

//Eliminar un registro
export const eliminarRegistro = async(req,res)=>{
    try{
        const id = req.params.id
        await BlogModel.deleteOne({_id: id}).then(res=>{
            console.log(res)
        })
        res.json({
            "message":"Alumno Eliminado correctamente"
        })
    }catch(error){
        res.json({message:error.message})
    }
}
