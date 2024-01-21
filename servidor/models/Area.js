const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
nombreArea:{
        type: String,
    }
},
{
    collection:'Area',
    timestamps: true
});

module.exports = mongoose.model('Area',UsuarioSchema)