<<<<<<< HEAD
const express = require("express");
const pacienteController = require('../controllers/pacienteController.js');
const router = express.Router();

//Create user
router.post('/users', pacienteController.crearPaciente);

// get all users
router.get('/users',pacienteController.obtenerPacientes);

// get a user
router.get('/users/:id',pacienteController.obtenerPaciente);

// update  a user
router.put('/users/:id', pacienteController.actualizarPaciente);

// delete a user
router.delete('/users/:id', pacienteController.eliminarPaciente);

=======
const express = require("express");
const pacienteController = require('../controllers/pacienteController.js');
const router = express.Router();

//Create user
router.post('/users', pacienteController.crearPaciente);

// get all users
router.get('/users',pacienteController.obtenerPacientes);

// get a user
router.get('/users/:id',pacienteController.obtenerPaciente);

// update  a user
router.put('/users/:id', pacienteController.actualizarPaciente);

// delete a user
router.delete('/users/:id', pacienteController.eliminarPaciente);

>>>>>>> 1771448fb7b2fe246bc00b2de83c96ca6d77db05
module.exports = router;