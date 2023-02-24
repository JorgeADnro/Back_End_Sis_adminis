const Empleado = require("../models/user");

exports.crearEmpleado = async(req,res) =>{
    try {
        let empleado;
        //Creamos el empleado
        empleado = new Empleado(req.body);
        await empleado.save();
        res.send(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerEmpleado = async(req,res) =>{
    try {
        const empleado = await Empleado.find();
        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerEmpleado = async(req,res) =>{
    try {
        let empleado = await empleado.findById(req.params.id);
        if(!empleado){
            res.status(404).json({msg: "No existe el empleado"});
        }
        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarEmpleado = async(req,res) =>{
    try {
        const { name,age,date,rol,domicile,phoneNumber } = req.body;
        let empleado = await Empleado.findById(req.params.id);
        if(!empleado){
            res.status(404).json({msg: "No existe el paciente"});
        }
        empleado.name = name;
        empleado.age = age;
        empleado.rol = rol;
        empleado.date = date;
        empleado.domicile = domicile;
        empleado.phoneNumber = phoneNumber;
        empleado = await Empleado.findOneAndUpdate({_id:req.params.id}, empleado, {new:true});
        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarEmpleado = async(req,res) =>{
    try {
        let empleado = await Empleado.findById(req.params.id);
        if(!empleado){
            res.status(404).json({msg: "No existe el empleado"});
        }
        await Empleado.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Empleado eliminado con éxito'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}