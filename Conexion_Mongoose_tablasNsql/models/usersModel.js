const mongoose = require("../config/mongodb");

//Crear departaments SCHEMA - OBJETO
const usersSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "El campo es obligatorio"],
    },
    password:{
        type: String,
        required: [true, "El campo es obligatorio"],

    },
});

//Crear el MODELO de mongoose
const usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel;