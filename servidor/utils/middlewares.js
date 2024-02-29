const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    if(!req.headers['authorization']){
        return res.json({error:'Debes tener una cuenta logueada para continuar'});
    }

    const token = req.headers['authorization'];

    let payload;
    try {
        payload = jwt.verify(token, 'primerToken')
    } catch (error) {
        return res.json({error: 'El token no es correcto'});
    }
    



    next();
}

module.exports = { checkToken }