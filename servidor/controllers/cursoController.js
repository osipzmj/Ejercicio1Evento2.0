const Curso = require("../models/Curso");

exports.crearCurso = async (req, res) =>{
    try {
        //Creamos nuestro usuario
        cursos = new Curso(req.body);
        
        await cursos.save()
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCursos = async (req,res) => {

    try {
        const cursos = await Curso.find();
        res.json(cursos)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarCurso = async (req,res) => {
    try {
        const  { nombreCurso } = req.body;
        let cursos = await Curso.findById(req.params.id);

        if(!cursos){
            res.status(404).json({msg: 'Curso inexistente'})
        }
        cursos.nombreCurso = nombreCurso;

        cursos = await Curso.findByIdAndUpdate({_id: req.params.id}, cursos, { new: true})
        res.json(cursos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCursoID = async (req,res) => {

    try {
        let cursos  = await Curso.findById(req.params.id);

        if(!cursos){
            res.status(404).json({msg: 'Curso inexistente'})
        }
        
        res.json(cursos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCurso = async (req,res) => {

    try {
        let cursos = await Curso.findById(req.params.id);

        if(!cursos){
            res.status(404).json({msg: 'Curso inexistente'})
        }
        
        await cursos.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Curso eliminada con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}