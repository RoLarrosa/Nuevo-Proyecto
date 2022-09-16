const User = require("../models/user");

const ctrlUser = {};


ctrlUser.getUsers = async (req, res) => {
    const users = await User.find();
    return res.json(users)
};


ctrlUser.postUser = async (req, res) => {
    
    const { username, password, email } = req.body;

    const newUser = new User({
        username,
        password,
        email
    });

    const user = await newUser.save();
    
    return res.json({
        msg: 'Usuario creado correctamente',
        user
    });
};


ctrlUser.putUser = async (req, res) => {
    return res.json({
        msg: ''
    })
};


ctrlUser.deleteUser = async (req, res) => {
    return res.json({
        msg: ''
    })
};

module.exports = ctrlUser;