const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

//Creacion del servidor
const app = express();

//Conectamos a la DB
conectarDB();
app.use(cors())
 
app.use(express.json());

app.use('/usuario', require('./routes/usuario'));
app.use('/area', require('./routes/area'));
app.use('/cargo', require('./routes/cargo'));
app.use('/ciudad', require('./routes/ciudad'));
app.use('/evento', require('./routes/evento'));
app.use('/genero', require('./routes/genero'));


app.listen(4000, () => {
    console.log('El servidor se esta corriendo')
})