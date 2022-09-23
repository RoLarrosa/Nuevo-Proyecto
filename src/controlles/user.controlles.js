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

    const user = await newUser.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
        }
    });

    console.log(req.body)

    return res.json({
        msg: 'Usuario creado correctamente',
        //user
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