import express from 'express';
import { CrearUsuarios, getUsuarios } from '../controllers/usuariocontroller.js';

const router = express.Router()

// Usuarios
router.post('/CrearUsuario',CrearUsuarios);
router.get('/Listar',getUsuarios);

export default router