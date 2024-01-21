const Areas = require("../models/Area");

exports.crearArea = async (req, res) =>{
    try {
        //Creamos nuestro usuario
        areas = new Areas(req.body);
        
        await areas.save()
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerArea = async (req,res) => {

    try {
        const areas = await Areas.find();
        res.json(areas)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarArea = async (req,res) => {
    try {
        const  { nombreArea } = req.body;
        let areas = await Areas.findById(req.params.id);

        if(!areas){
            res.status(404).json({msg: 'Area inexistente'})
        }
        areas.nombreArea = nombreArea;

        areas = await Areas.findByIdAndUpdate({_id: req.params.id}, areas, { new: true})
        res.json(areas);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerAreaID = async (req,res) => {

    try {
        let areas  = await Areas.findById(req.params.id);

        if(!areas){
            res.status(404).json({msg: 'Area inexistente'})
        }
        
        res.json(areas);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarArea = async (req,res) => {

    try {
        let areas = await Areas.findById(req.params.id);

        if(!areas){
            res.status(404).json({msg: 'Area inexistente'})
        }
        
        await areas.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Area eliminada con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}