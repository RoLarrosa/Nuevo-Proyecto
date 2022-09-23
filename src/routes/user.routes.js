const router = require('express').Router();
//const modelsUser = require('../models/user');

const {
    getUser,
    postUser,
    putUser,
    deleteUser,

} = require('../controlles/user.controlles');

router.get('/user', getUser);

router.post('/user', postUser);

router.put('/user', putUser);

router.delete('/user', deleteUser);

module.exports = router;