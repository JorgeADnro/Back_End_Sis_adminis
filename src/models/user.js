const mongoose = require("mongoose");

const empleadoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    rol: {
        type: String,
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
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', empleadoSchema);