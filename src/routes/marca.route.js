const express = require("express");
const router = express.Router();
const Marca = require("../models/marca");
const mongoose = require("mongoose");

router.route("/").get(async (req, res) => {
    const foundMarcas = await Marca.find();
    res.json(foundMarcas);
});

router.route('/create').post(async (req, res) => {
    const _id = new mongoose.Types.ObjectId;
    const { nombre, logo, enlace } = req.body;
    const newMarca = new Marca({
        _id,
        nombre,
        logo,
        enlace
    });
    await newMarca.save();
    res.json('Marca created')
});

router.route("/:nombre").get(async (req, res) => {
    const foundMarca = await Marca.findOne({'nombre': req.params.nombre});
    res.json(foundMarca);
});

router.route("/:_id").delete(async (req, res) => {
    await User.findByIdAndDelete(req.params._id);
    res.status(200).json({
        message:"Marca deleted sucessfully",
        result:result
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});

module.exports = router;