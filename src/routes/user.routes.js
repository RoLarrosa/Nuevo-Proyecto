const router = require('express').Router();
//const modelsUser = require('../models/user');

const {
    getUsers,
    postUser,
    putUser,
    deleteUser,

} = require('../controllers/user.controllers');

router.get('/user', getUsers);

router.get('/user', postUser);

router.put('/user', putUser);

router.delete('/user', deleteUser);

module.exports = router;