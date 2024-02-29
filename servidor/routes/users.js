const router = requiere('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../models/Users.model');

//POST /api/users/register
router.post('/register', async (req, res) =>{
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

module.exports = router;