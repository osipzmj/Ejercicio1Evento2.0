//Rutas para usuario
const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController')

//Api/usuarios
router.post('/',eventoController.crearEvento);
router.get('/', eventoController.leerEvento),
router.put('/:id', eventoController.actualizarEvento),
router.get('/:id', eventoController.leerEventoID),
router.delete('/:id', eventoController.eliminarEvento),

module.exports = router;