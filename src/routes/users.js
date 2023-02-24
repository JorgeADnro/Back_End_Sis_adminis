const express = require("express");
const empleadoController = require('../controllers/empleadoController.js');
const router = express.Router();

//Create user
router.post('/users', empleadoController.crearEmpleado);

// get all users
router.get('/users',empleadoController.obtenerEmpleado);

// get a user
router.get('/users/:id',empleadoController.obtenerEmpleado);

// update  a user
router.put('/users/:id', empleadoController.actualizarEmpleado);

// delete a user
router.delete('/users/:id', empleadoController.eliminarEmpleado);

module.exports = router;