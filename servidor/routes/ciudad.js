//Rutas para usuario
const express = require('express');
const router = express.Router();
const ciudadController = require('../controllers/ciudadController')

//Api/usuarios
router.post('/',ciudadController.crearCiudad);
router.get('/', ciudadController.leerCiudad),
router.put('/:id', ciudadController.actualizarCiudad),
router.get('/:id', ciudadController.leerCiudadID),
router.delete('/:id', ciudadController.eliminarCiudad),

module.exports = router;