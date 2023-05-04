import express from 'express';
import {actualizarRegistro, crearRegistro, eliminarRegistro, registros} from '../controllers/BlogControllers.js'

const router = express.Router();


router.get('/',registros)
router.post('/',crearRegistro)
router.put('/:id',actualizarRegistro)
router.delete('/:id',eliminarRegistro)

export default router