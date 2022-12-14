const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    { 
        _id: mongoose.Schema.Types.ObjectId,
        nombre: {
            type: String,
            require: true,
            trim: true
        },
        apellido: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            trim:true
        },
        password: {
            type: String,
            require: true,
            trim: true
        }
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;