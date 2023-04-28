import mongoose from 'mongoose';

const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
        nombre:{type:String},
        apellido:{type:String},
        correo:{type:String},
        contraseña:{type:String}
    },
    {collection:'estudiantes'}
)

export default mongoose.model('BlogModel', blogSchema)