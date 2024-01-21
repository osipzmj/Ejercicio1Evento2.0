const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    folio:{
        type: Number,
    },
    nombre: {
        type: String,
        required: true
    },
    apPaterno: {
        type: String,
        required: true
    },
    apMaterno: {
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: true
    },
    genero:{
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true  
    },
    fechaCreacionUsuario: {
        type: Date,
        default: Date.now()
    },
    nombreArea:{
        type: String,
    },
    nombreCiudad:{
        type: String,
    },
    nombreCargo:{
        type: String,
    },
    nombreEvento:{
        type: [String],
    }
},
{
    collection:'Usuario',
    timestamps: true
});

module.exports = mongoose.model('Usuario',UsuarioSchema)
