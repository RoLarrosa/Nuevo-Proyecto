const mongoose = require('mongoose');

const user = 'proyecto_1';
const password = 'rLLAHP6cZEm0eoJi';
const dbname = 'proyecto_express';
const uri = `mongodb+srv://${user}:${password}@cluster0.aixqygc.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const dbConnect = () => {
    try {
        mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Conectado a la Base de Datos');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }
}

module.exports = dbConnect;