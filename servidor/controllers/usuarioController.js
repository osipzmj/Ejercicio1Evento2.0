const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) =>{
    try {
        //Creamos nuestro usuario
        nombreUsuario = new Usuario(req.body);
        
        await nombreUsuario.save() 
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        console.log(nombreUsuario);
    }
}

// exports.leerUsuario = async (req,res) => {

//     try {
//         const nombreUsuario = await Usuario.find();
//         res.json(nombreUsuario)

//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Hubo un error');
//     }
// }

exports.leerUsuario = async (req,res) => {

    try {
        const nombreUsuario = await Usuario.aggregate([{$sort:{apPaterno:1,fechaCreacionUsuario:1}}]);
        res.json(nombreUsuario)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuariosOrdenados = async (req, res) => {
    try {
      const orden = parseInt(req.query.orden);
      let usuarios = [];
  
            if (!(filtro == "null")) {
              usuarios = await Usuario.find({ [filtro]: valor }).sort({ [campo]: orden });
            } else {
              usuarios = await Usuario.find().sort({ [campo]: orden });
            }
            res.json(usuarios);
         
    } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error!!! 🙁');
    }
  };

exports.leerUsuarioCuenta = async (req,res) => {
    try{
        const cuentaUsuario = await Usuario.count();
        res.json(cuentaUsuario)
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.ordenarGenero = async (req,res) => {
    try{
        const ordenarUsuario = await Usuario.find({"genero":"Masculino"});
        res.json(ordenarUsuario)
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.ordenarGeneroF = async (req,res) => {
    try{
        const ordenarUsuario = await Usuario.find({"genero":"Femenino"});
        res.json(ordenarUsuario)
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarUsuario = async (req,res) => {
    try {
        const  { nombre, apPaterno, apMaterno, edad, genero, nombreArea, email, telefono, nombreCiudad, nombreCargo } = req.body;
        let nombreUsuario = await Usuario.findById(req.params.id);

        if(!nombreUsuario){
            res.status(404).json({msg: 'Usuario inexistente'})
        }
        nombreUsuario.nombre = nombre;
        nombreUsuario.apPaterno = apPaterno;
        nombreUsuario.apMaterno = apMaterno;
        nombreUsuario.edad = edad;
        nombreUsuario.genero = genero;
        nombreUsuario.nombreArea = nombreArea;
        nombreUsuario.email = email;
        nombreUsuario.telefono = telefono;
        nombreUsuario.nombreCiudad = nombreCiudad;
        nombreUsuario.nombreCargo = nombreCargo;


        nombreUsuario  = await Usuario.findByIdAndUpdate({_id: req.params.id}, nombreUsuario, { new: true})
        res.json(nombreUsuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.leerUsuarioID = async (req,res) => {

    try {
        let nombreUsuario  = await Usuario.findById(req.params.id);

        if(!nombreUsuario ){
            res.status(404).json({msg: 'Usuario inexistente'})
        }
        
        res.json(nombreUsuario );

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuario = async (req,res) => {

    try {
        let nombreUsuario = await Usuario.findById(req.params.id);

        if(!nombreUsuario ){
            res.status(404).json({msg: 'Usuario inexistente'})
        }
        
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Producto eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}