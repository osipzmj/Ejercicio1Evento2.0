//Rutas para usuario
const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargoController')

//Api/usuarios
router.post('/',cargoController.crearCargo);
router.get('/', cargoController.leerCargo),
router.put('/:id', cargoController.actualizarCargo),
router.get('/:id', cargoController.leerCargoID),
router.delete('/:id', cargoController.eliminarCargo),

module.exports = router;