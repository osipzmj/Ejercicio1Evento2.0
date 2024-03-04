const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
nombreCurso: String,
tipoCurso:{
        type: String,
        default: 'Sin identificador'
    },
horas:  String,
img:String    


},
{
    collection:'Curso',
    timestamps: true
});

module.exports = mongoose.model('Curso',UsuarioSchema)