const express = require('express');
const app = express();
const conexionDb = require('./src/db/connection')
conexionDb();
app.use(express.json());

app.use(require("./src/routes/home.routes"))

const port = 3000
app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})