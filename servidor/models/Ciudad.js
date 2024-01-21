const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
nombreCiudad:{
        type: String,
        required: true
    }
},
{
    collection:'Ciudad',
    timestamps: true
});

module.exports = mongoose.model('Ciudad',UsuarioSchema)