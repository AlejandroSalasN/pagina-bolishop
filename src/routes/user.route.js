const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

router.route("/").get(async (req, res) => {
    const foundUsers = await User.find({});
    res.json(foundUsers);
});

router.route('/create').post(async (req, res) => {
    const _id = new mongoose.Types.ObjectId;
    const { nombre, apellido, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const newUser = new User({
        _id,
        nombre,
        apellido,
        email,
        password: hash
    });
    await newUser.save();
    res.redirect('/');
});

router.route("/:email").get(async (req, res) => {
    const foundUser = await User.findOne({'email': req.params.email});
    res.json(foundUser);
});

router.route("/:email").put(async (req, res) => {
    const { nombre, apellido, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    await Note.findOneAndUpdate(req.params.id, {
        nombre,
        apellido,
        email,
        password: hash
    });
    res.json({message: 'user update'})
});

router.route("/:email").delete(async (req, res) => {
    await User.findOneAndDelete(req.params.email);
    res.status(200).json({
        message:"user deleted sucessfully",
        result:result
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});

module.exports = router;