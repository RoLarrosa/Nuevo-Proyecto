const Users = require("../models/user");

const ctrlUser = {};


ctrlUser.getUser = async (req, res) => {
    const users = await Users.find();
    return res.json(users)
};


ctrlUser.postUser = async (req, res) => {
    
    const { username, password, email, active } = req.body;

    const newUser = new Users({
        username,
        password,
        email,
        active
    });

    try{

        const user = await newUser.save();
        console.log(req.body);
        return res.json( 'Usuario creado correctamente')
    } catch (error) {
        console.log(error)
    }   
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