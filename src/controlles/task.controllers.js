const Task = require("../models/task");

const ctrlTask = {};

ctrlTask.getTask = (req, res) => {
    res.send({
        message: "Peticion GET"
    })
}

ctrlTask.postTask = (req, res) => {
    console.log(req.body)
    res.send({
        message: "Peticion POST"
    })
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