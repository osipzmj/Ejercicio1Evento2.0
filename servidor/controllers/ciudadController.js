const Ciudades = require("../models/Ciudad");


exports.crearCiudad = async (req, res) =>{
    try {
        //Creamos nuestro usuario
        ciudades = new Ciudades(req.body);
        
        await ciudades.save()
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerCiudad = async (req,res) => {

    try {
        const ciudades = await Ciudades.find();
        res.json(ciudades)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarCiudad = async (req,res) => {
    try {
        const  { nombreCiudad } = req.body;
        let ciudades = await ciudades.findById(req.params.id);

        if(!ciudades){
            res.status(404).json({msg: 'Ciudad inexistente'})
        }
        ciudades.nombreCiudad = nombreCiudad;

        ciudades = await ciudades.findByIdAndUpdate({_id: req.params.id}, ciudades, { new: true})
        res.json(ciudades);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerCiudadID = async (req,res) => {

    try {
        let ciudades  = await Ciudades.findById(req.params.id);

        if(!ciudades){
            res.status(404).json({msg: 'Ciudad inexistente'})
        }
        
        res.json(ciudades);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCiudad = async (req,res) => {

    try {
        let ciudades = await Ciudades.findById(req.params.id);

        if(!ciudades){
            res.status(404).json({msg: 'Ciudad inexistente'})
        }
        
        await Ciudades.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Ciudad eliminada con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}