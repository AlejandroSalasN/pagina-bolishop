const express = require("express");
const router = express.Router();
const Producto = require("../models/producto");
const mongoose = require("mongoose");

router.route("/productos").get(async (req, res) => {
    const foundProducto = await Producto.find();
    res.json(foundProducto);
});

router.route('/productos/create').post(async (req, res) => {
    const _id = new mongoose.Types.ObjectId;
    const { nombre, descripcion, precio, opciones, stock, imagenPrincipal, imagen2, imagen3, imagen4, imagen5, categorias } = req.body;
    const newProducto = new Producto({
        _id,
        nombre,
        descripcion,
        precio, 
        opciones,
        stock,
        imagenPrincipal,
        imagen2,
        imagen3,
        imagen4,
        imagen5,
        categorias
    });
    await newProducto.save();
    res.json('Producto creado');
});

router.route("/:_id").get(async (req, res) => {
    const foundProducto = await Producto.findOne({'_id': req.params._id});
    res.json(foundProducto);
});

router.route("/:_id").put(async (req, res) => {
    const { nombre, precio, stock, imagenPrincipal } = req.body;
    await Note.findOneAndUpdate(req.params.id, {
        nombre,
        precio,
        stock,
        imagenPrincipal
    });
    res.json({message: 'Producto actualizado'});
});

router.route("/:_id").delete(async (req, res) => {
    await Producto.findByIdAndDelete(req.params._id);
    res.status(200).json({
        message:"Producto deleted sucessfully",
        result:result
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});

module.exports = router;