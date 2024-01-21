const Evento = require("../models/Evento");

exports.crearEvento = async (req, res) =>{
    try {
        //Creamos nuestro usuario
        Evento = new Evento(req.body);
        
        await Evento.save()
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerEvento = async (req,res) => {

    try {
        const evento = await Evento.find();
        res.json(evento)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarEvento = async (req,res) => {
    try {
        const  { cupo } = req.body;
        let evento = await Evento.findById(req.params.id);

        if(!evento){
            res.status(404).json({msg: 'Evento inexistente'})
        }
        evento.cupo = cupo;

        evento  = await Evento.findByIdAndUpdate({_id: req.params.id},{Evento : cupo-1}, evento, { new: true}).array.forEach(obj1 => {
            Usuario.findById(obj1.folio)
        });
        res.json(evento);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerEventoID = async (req,res) => {

    try {
        let evento  = await Evento.findById(req.params.id);

        if(!evento ){
            res.status(404).json({msg: 'Evento inexistente'})
        }
        
        res.json(evento);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarEvento = async (req,res) => {

    try {
        let Evento = await Evento.findById(req.params.id);

        if(!Evento){
            res.status(404).json({msg: 'Evento inexistente'})
        }
        
        await Evento.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Evento eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
