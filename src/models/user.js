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

module.exports = mongoose.model('User', pacienteSchema);