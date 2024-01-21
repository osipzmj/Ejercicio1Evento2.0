const Cargos = require("../models/Cargo");

exports.crearCargo = async (req, res) =>{
    try {
        //Creamos nuestro usuario
        cargos = new Cargos(req.body);
        
        await cargos.save()
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerCargo = async (req,res) => {

    try {
        const cargos = await Cargos.find();
        res.json(cargos)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarCargo = async (req,res) => {
    try {
        const  { nombreCargo } = req.body;
        let cargos = await Cargos.findById(req.params.id);

        if(!cargos){
            res.status(404).json({msg: 'Cargo inexistente'})
        }
        cargos.nombreCargo = nombreCargo;

        cargos = await Cargos.findByIdAndUpdate({_id: req.params.id}, cargos, { new: true})
        res.json(cargos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerCargoID = async (req,res) => {

    try {
        let cargos  = await Cargos.findById(req.params.id);

        if(!cargos ){
            res.status(404).json({msg: 'Cargo inexistente'})
        }
        
        res.json(cargos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCargo = async (req,res) => {

    try {
        let cargos = await Cargos.findById(req.params.id);

        if(!cargos){
            res.status(404).json({msg: 'Cargo inexistente'})
        }
        
        await Cargos.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Cargo eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}