const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
nombreCargo:{
        type: String,
        required: true
    }
},
{
    collection:'Cargo',
    timestamps: true
});

module.exports = mongoose.model('Cargo',UsuarioSchema)