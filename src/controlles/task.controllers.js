const Tasks = require("../models/task");

ctrlTasks = {};


ctrlTasks.getTask = async (req, res) => {
    const tasks = await Tasks.find({ isActive: true });

    return res.render('index', {tasks});
};

ctrlTasks.postTask = async (req, res) => {
    const { titulo, descripcion } = req.body;


    const nuevaTarea = new Tasks({
        titulo,
        descripcion
    });

    try {
        
        const tarea = await nuevaTarea.save();

        return res.json({
            msg:'La tarea fue guardada con éxito',
            tarea});
    } catch (error) {
        console.log(error)
    }
};


ctrlTasks.putTask = async (req, res) => {
    const id = req.params.id;
    const { titulo, descripcion, ...otroDatos } = req.body;

    if (!id || !descripcion || !titulo) {
        return res.status(400).json({
            msg: 'No viene id en la petición',
        });
    };

    try {
        const tareaActualizada = await Tasks.findByIdAndUpdate(id, { titulo, descripcion })

        return res.json({
            msg: 'Tarea actualizada correctamente',
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Error al actualizar la tarea'
        })
    }
};

	
ctrlTasks.deleteTask = async (req, res) => {
    const id = req.params.id;

    try {
        await Tasks.findByIdAndUpdate(id, { isActive: false })
        return res.json('Tarea eliminada correctamente');
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al eliminar la tarea'
        });
    }
};


module.exports = ctrlTasks;