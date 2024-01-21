//Rutas para usuario
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.get('/',usuarioController.ordenarGenero);
router.get('/f',usuarioController.ordenarGeneroF)

module.exports = router;