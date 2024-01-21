//Rutas para usuario
const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areaController')

//Api/usuarios
router.post('/',areaController.crearArea);
router.get('/', areaController.leerArea),
router.put('/:id', areaController.actualizarArea),
router.get('/:id', areaController.leerAreaID),
router.delete('/:id', areaController.eliminarArea),

module.exports = router;