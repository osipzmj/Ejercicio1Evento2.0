const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
nombreEvento:{
        type: String,
        required: true
    },
nombreArea:{
        type: String,
        required: true
    },
cupo:{
        type: Number,
        required: true
    },
folio:{
        type: [Number],
        required: true
    },
presentador:{
    type: String
},
horario:{
    type: String
},
duracion: {
    type:String
}
},
{
    collection:'Evento',
    timestamps: true
});

module.exports = mongoose.model('Evento',UsuarioSchema)