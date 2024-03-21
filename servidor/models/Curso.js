const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const CursoSchema = mongoose.Schema(
    {
      nombreCurso: String,
      tipoCurso: {
        type: String,
        default: "Sin identificador",
      },
      horas: String,
      img: String,
      descripcion: String,
      idioma: String,
      valoracion: Number, // Cambiado a Number en lugar de Boolean
      pais: String,
      precio: Number, // Cambiado a Number en lugar de Boolean
    },
    {
      collection: "Curso",
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Curso", CursoSchema);
  
