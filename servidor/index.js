const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const { checkToken } = require('./utils/middlewares');

//Creacion del servidor
const app = express();

//Conectamos a la DB
conectarDB();
app.use(cors())
 
app.use(express.json());

app.use('/usuario', require('./routes/usuario'));
//cursos
app.use('/curso', require('./routes/curso'));
app.use('/cargo', require('./routes/cargo'));
app.use('/ciudad', require('./routes/ciudad'));
app.use('/evento', require('./routes/evento'));
app.use('/genero', require('./routes/genero'));
app.use('/users', require('./routes/users'));

app.listen(4000, () => {
    console.log('El servidor se esta corriendo')
})