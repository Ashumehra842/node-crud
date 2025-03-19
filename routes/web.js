const express = require('express');
const router = express.Router();	
const UserControllers = require('../controllers/UserController');
router.get('/create', UserControllers.createUser);
router.get('/', UserControllers.getUsers);
router.get('/detail/:id', UserControllers.getUserData);

router.get('/delete/:id', UserControllers.deleteUser);
module.exports = router; 