const Task = require("../models/task");

const ctrlTask = {};

ctrlTask.getTask = (req, res) => {
    res.send({
        message: "Peticion GET"
    })
}

ctrlTask.postTask = async(req, res) => {
    const {name, description} = req.body;

    const newTask = new Task({
        name,
        description
    });
    const task = await newTask.save();
    
    return res.json({
        msg: "tarea creada correctamente",
        task
    });
}

ctrlTask.putTask = (req, res) => {
    res.send({
        message: "Peticion PUT"
    })
}

ctrlTask.deleteTask = (req, res) => {
    res.send({
        message: "Peticion DELETE"
    })
}

module.exports = ctrlTask;