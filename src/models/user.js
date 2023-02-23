<<<<<<< HEAD
const mongoose = require("mongoose");

const pacienteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    domicile:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    chronologicalDisease:{
        type: String,
        required: true
    },
    pathologicalDisease:{
        type: String,
        required: true
    }
});

=======
const mongoose = require("mongoose");

const pacienteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    domicile:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    chronologicalDisease:{
        type: String,
        required: true
    },
    pathologicalDisease:{
        type: String,
        required: true
    }
});

>>>>>>> 1771448fb7b2fe246bc00b2de83c96ca6d77db05
module.exports = mongoose.model('User', pacienteSchema);