//Rutas para usuario
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController')

//Api/usuarios
router.post('/',cursoController.crearCurso);
router.get('/', cursoController.obtenerCursos),
router.put('/:id', cursoController.actualizarCurso),
router.get('/:id', cursoController.obtenerCursosId),
router.delete('/:id', cursoController.eliminarCurso),

module.exports = router;