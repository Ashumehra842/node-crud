const express = require('express');
const router = express.Router();	
const UserControllers = require('../controllers/UserController');
router.post('/submit', UserControllers.createUser);
router.get('/', UserControllers.getUsers);
router.get('/detail/:id', UserControllers.getUserData);

router.get('/delete/:id', UserControllers.deleteUser);
router.get('/update/:id', UserControllers.updateUser);
router.post('/update',UserControllers.updateData);
router.get('/login', UserControllers.login);
router.get('/auth', UserControllers.loginUser);
router.post('/authentication', UserControllers.authentication);
module.exports = router; 