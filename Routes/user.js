const path = require('path');

const express = require('express');

const userController = require('../Controller/user');

const router = express.Router();

router.get('/user',userController.getUsers);
router.post('/adduser',userController.addUser);
router.post('/user/delete/:userid',userController.deleteUser);

module.exports = router;