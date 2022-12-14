const mongoose = require('mongoose');

const marcaSchema = new mongoose.Schema(
    { 
        nombre: {
            type: String,
            require: true,
            trim: true
        },
        logo: {
            type: String,
            trim: true,
            default: ""
        },
        enlace: {
            type: String,
            trim: true
        }
    }
);

const Marca = mongoose.model('Marca', marcaSchema);

module.exports = Marca;