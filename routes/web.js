const express = require('express');
const router = express.Router();	
const UserControllers = require('../controllers/UserController');
router.post('/submit', UserControllers.createUser);
router.get('/', UserControllers.getUsers);
router.get('/detail/:id', UserControllers.getUserData);

router.get('/delete/:id', UserControllers.deleteUser);

router.get('/login', UserControllers.login);
module.exports = router; 