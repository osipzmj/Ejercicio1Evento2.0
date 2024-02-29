const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/Users.model');
const UsersModel = require('../models/Users.model');

router.get('/obtenerUsuarios', async (req, res) => {
    try {
        const cargos = await UsersModel.find();
        res.json(cargos)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
});
//POST /api/users/register
router.post('/registro', async (req, res) => {
try{
    req.body.password = bcrypt.hashSync(req.body.password, 12);

    const user = await User.create(req.body);
    res.json(user);
}
catch (error){
    res.json({error: error.message});
}
});

//POST /api/users/login
router.post('/login', async (req, res) => {
    //COMPRAOBAR SI EL EMAIL EXISTE
    const user = await User.findOne({email: req.body.email});

    if (!user){
        return res.json({ error: 'Email o contraseña incorrectos' });
    }

    const eq = bcrypt.compareSync(req.body.password, user.password);

    if(!eq) {
        return res.json({ error: 'Email o contraseña incorrectos'});
    }
    res.json({ success: 'Inicio de sesión correcto. BIENVENIDO NUEVAMENTE' + ' ' + user.username,
             token: crearToken(user) })
})


function crearToken(user){
    const payload = {
        user_id: user._id,
        user_role: user.role
    }
    return jwt.sign(payload, 'primerToken');
}
module.exports = router;