const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        nombre: {
            type: String,
            require: true,
            trim: true
        },
        descripcion: {
            type: String,
            trim: true
        },
        precio: {
            type: Number,
            require: true,
            default: 0.00,
        },
        opciones: {
            opcion1: {
                type: String,
                trim: true,
                stock: {
                    type: Number,
                    default: 0
                }
            },
            opcion2: {
                type: String,
                trim: true,
                stock: {
                    type: Number,
                    default: 0
                }
            },
            opcion3: {
                type: String,
                trim: true,
                stock: {
                    type: Number,
                    default: 0
                }
            },
            opcion4: {
                type: String,
                trim: true,
                stock: {
                    type: Number,
                    default: 0
                }
            },
            opcion5: {
                type: String,
                trim: true,
                stock: {
                    type: Number,
                    default: 0
                }
            }
        },
        stock: {
            type: Number,
            default: 0
        },
        imagenPrincipal: {
            type: String,
            require: true,
            default: ""
        },
        imagen2: String,
        imagen3: String,
        imagen4: String,
        imagen5: String,
        categorias: {
            categoria1: {
                type: String,
                trim: true
            },
            categoria2: {
                type: String,
                trim: true
            },
            categoria3: {
                type: String,
                trim: true
            },
            categoria4: {
                type: String,
                trim: true
            },
            categoria5: {
                type: String,
                trim: true
            }
        }

    }
);

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;